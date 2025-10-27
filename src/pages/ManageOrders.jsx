import ManagementStats from "@/features/ManageOrders/ManagementStats";
import OrderCard from "@/features/Orders/OrderCard";
import FadeinBox from "@/motion/FadeinBox";
import DropDownUi from "@/ui/DropDownUi";
import Header from "@/ui/Header";
import { useState } from "react";

function ManageOrders() {
  const [sortBy, setSortBy] = useState("Sort By");
  const droplist = ["Accepted", "On Queue", "Prepearing", "Waiting for Rider"];

  return (
    <>
      <Header type={"big"}>Manage Orders</Header>
      <FadeinBox>
        <ManagementStats />
      </FadeinBox>

      <div className="flex justify-between items-center mb-4 mt-2">
        <Header>All Orders</Header>
        <DropDownUi
          dropdown={sortBy}
          setDropdown={setSortBy}
          DropContent={droplist}
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <FadeinBox>
          <OrderCard manage={true} />
        </FadeinBox>
        <FadeinBox delay={0.1}>
          <OrderCard manage={true} />
        </FadeinBox>
        <FadeinBox delay={0.1}>
          <OrderCard manage={true} />
        </FadeinBox>
        <FadeinBox delay={0.1}>
          <OrderCard manage={true} />
        </FadeinBox>
      </div>
    </>
  );
}

export default ManageOrders;
