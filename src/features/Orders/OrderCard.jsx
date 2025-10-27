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

function OrderCard({ manage = false }) {
  // manage -- so that I can use this on managment page and orders page.
  // Later will load data dynamically

  const [status, setStatus] = useState("Accepted");

  // For dropdown list
  const droplist = ["Accepted", "On Queue", "Prepearing", "Waiting for Rider"];

  return (
    <Card>
      <CardHeader className="text-[18px]">
        <CardTitle className="w-full ">Nafiz Al Rakib</CardTitle>
        <CardDescription>11:20 AM</CardDescription>
        <CardAction>৳120</CardAction>
      </CardHeader>
      <CardContent>
        {/* Item Card */}
        <OrderItemCard />
      </CardContent>
      {manage ? (
        <CardFooter>
          <DropDownUi
            dropdown={status}
            setDropdown={setStatus}
            DropContent={droplist}
          />
        </CardFooter>
      ) : (
        <CardFooter className="flex gap-2">
          <Button>Accept</Button>
          <Button variant="outline">Cancel</Button>
        </CardFooter>
      )}
    </Card>
  );
}

export default OrderCard;
