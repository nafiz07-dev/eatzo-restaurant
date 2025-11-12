import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import OrderItemCard from "./OrderItemCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import DropDownUi from "@/ui/DropDownUi";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { isoToHour } from "@/utils/formatDate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { acceptOrder } from "@/services/apiNewOrders";
import toast from "react-hot-toast";
import { Spinner } from "@/components/ui/spinner";

function OrderCard({ manage = false, history = false, groupedItem }) {
  const queryClient = useQueryClient();
  // console.log(groupedItem);
  // manage -- so that I can use this on managment page and orders page.
  // Later will load data dynamically

  const [status, setStatus] = useState("Accepted");

  // For dropdown list
  const droplist = ["Accepted", "On Queue", "Prepearing", "Waiting for Rider"];

  const orderCode = groupedItem?.order_code;
  const orderId = groupedItem?.order_id;
  const isoCreatedTime = groupedItem?.created_at;
  const items = groupedItem?.items;

  const totalPrice = items?.reduce((acc, cur) => acc + cur.total_price, 0);

  const { mutate, isPending } = useMutation({
    mutationFn: acceptOrder,
    onSuccess: () => {
      toast.success("Order Accepted");
      queryClient.invalidateQueries({ queryKey: ["new-orders"] });
    },
    onError: () => {
      toast.error("Something went wrong!!");
    },
  });

  // Double cause of clash in buttons, both will be set to loading and disabled. I can't find another way out with this shit.
  const { mutate: cancelOrder, isPending: isCanceling } = useMutation({
    mutationFn: acceptOrder,
    onSuccess: () => {
      toast.success("Successfuly canceled.");
      queryClient.invalidateQueries({ queryKey: ["new-orders"] });
    },
    onError: () => {
      toast.error("Something went wrong!!");
    },
  });

  // Handlers
  function handleAccept() {
    mutate({ orderId, status: "accepted" });
  }

  function handleCancel() {
    cancelOrder({ orderId, status: "canceled" });
  }

  return (
    <Card className="relative group overflow-hidden cursor-pointer">
      {/* full-card invisible link */}
      <Link to={`/order/${orderId}`} className="absolute inset-0 z-10" />

      <Link to={`/order/${orderId}`}>
        <CardHeader className="relative z-20 text-[18px]">
          <CardTitle className="w-full">#{orderCode}</CardTitle>
          <CardDescription>{isoToHour(isoCreatedTime)}</CardDescription>
          <CardAction>৳{totalPrice}</CardAction>
        </CardHeader>
      </Link>

      <Link to={`/order/${orderId}`}>
        <CardContent className="relative z-20">
          <div
            className={`${
              items?.length > 1 ? "overflow-y-scroll scrollbar pr-2" : ""
            } h-35`}
          >
            {items?.map((item, key) => (
              <OrderItemCard key={key} item={item} />
            ))}
          </div>
        </CardContent>
      </Link>

      {manage ? (
        <CardFooter className="relative z-20">
          <DropDownUi
            dropdown={status}
            setDropdown={setStatus}
            DropContent={droplist}
          />
        </CardFooter>
      ) : (
        <div className="relative z-20">
          {history ? (
            <Link to={`/order/${orderId}`}>
              <CardFooter className="flex justify-between">
                <CardDescription>
                  Delivered on Tuesday 13, August, 2025 at 12:10
                </CardDescription>
                <CardAction>
                  <ChevronRight />
                </CardAction>
              </CardFooter>
            </Link>
          ) : (
            <CardFooter className="flex gap-2">
              <Button onClick={handleAccept} disabled={isPending}>
                {isPending && <Spinner />}Accept
              </Button>
              <Button
                variant="outline"
                onClick={handleCancel}
                disabled={isCanceling}
              >
                {isCanceling && <Spinner />}Cancel
              </Button>
            </CardFooter>
          )}
        </div>
      )}
    </Card>
  );
}

export default OrderCard;
