import OrderCard from "@/features/Orders/OrderCard";
import FadeinBox from "@/motion/FadeinBox";
import DropDownUi from "@/ui/DropDownUi";
import Header from "@/ui/Header";
import { useState } from "react";

function Orders() {
  const [sortBy, setSortBy] = useState("Sort By");
  // For dropdown
  const droplist = ["Recent", "Older"];

  return (
    <div>
      <div className="flex justify-between mb-4">
        <DropDownUi
          dropdown={sortBy}
          setDropdown={setSortBy}
          DropContent={droplist}
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <FadeinBox>
          <OrderCard />
        </FadeinBox>

        <FadeinBox delay={0.1}>
          <OrderCard />
        </FadeinBox>
        <FadeinBox delay={0.2}>
          <OrderCard />
        </FadeinBox>
        <FadeinBox delay={0.3}>
          <OrderCard />
        </FadeinBox>
      </div>
    </div>
  );
}

export default Orders;
