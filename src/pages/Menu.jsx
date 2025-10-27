import { ItemGroup } from "@/components/ui/item";
import MenuItemCard from "@/features/Menu/MenuItemCard";
import MenuStats from "@/features/Menu/MenuStats";
import Header from "@/ui/Header";
import FadeinBox from "@/motion/FadeinBox";
import { useState } from "react";
import DropDownUi from "@/ui/DropDownUi";

// TODO: Set the delay with map index later while loading data.

function Menu() {
  const [sortBy, setSortBy] = useState("Sort By");
  const droplist = ["Most Reviewed", "Most Sold", "High Price", "Low Price"];

  return (
    <div className="mb-20">
      <Header type={"big"}>Menu</Header>
      <FadeinBox>
        <MenuStats />
      </FadeinBox>
      <div className="flex justify-between items-center mb-4">
        <Header>Menu Items</Header>
        <DropDownUi
          dropdown={sortBy}
          setDropdown={setSortBy}
          DropContent={droplist}
        />
      </div>
      <ItemGroup className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <FadeinBox>
          <MenuItemCard />
        </FadeinBox>
        <FadeinBox delay={0.1}>
          <MenuItemCard />
        </FadeinBox>
        <FadeinBox delay={0.2}>
          <MenuItemCard />
        </FadeinBox>
        <FadeinBox delay={0.3}>
          <MenuItemCard />
        </FadeinBox>
      </ItemGroup>
    </div>
  );
}

export default Menu;
