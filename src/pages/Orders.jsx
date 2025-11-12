import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import OrderCard from "@/features/Orders/OrderCard";
import useGroupedOrders from "@/hooks/useGroupedOrders";
import FadeinBox from "@/motion/FadeinBox";
import DropDownUi from "@/ui/DropDownUi";
import { useState } from "react";

/*
TODO:
 - Load new orders
 - Accept the order.
 - Cancel the order.
 - [x] Empty new orders text.
 - [x] I should make an centerDiv component for centering.
 - [x] Viewing the orders
    - [x] Accepting in the view page

*/

function Orders() {
  const [sortBy, setSortBy] = useState("Sort By");
  // For dropdown
  const droplist = ["Recent", "Older"];

  // Load new data.
  const { groupedOrders, isLoading } = useGroupedOrders();

  return (
    <div>
      <div className="flex justify-between mb-4">
        <DropDownUi
          dropdown={sortBy}
          setDropdown={setSortBy}
          DropContent={droplist}
        />
      </div>
      {isLoading ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <Card>
            <CardHeader className="flex justify-between">
              <Skeleton className="h-8 w-30" />
              <Skeleton className="h-8 w-20" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-20" />
              <Skeleton className="h-20" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex justify-between">
              <Skeleton className="h-8 w-30" />
              <Skeleton className="h-8 w-20" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-20" />
              <Skeleton className="h-20" />
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {groupedOrders.map((groupedItem, i) => (
            <FadeinBox key={i} delay={0.1 * (i + 1)}>
              <OrderCard groupedItem={groupedItem} />
            </FadeinBox>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
