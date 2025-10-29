import OrderCard from "@/features/Orders/OrderCard";
import FadeinBox from "@/motion/FadeinBox";
import SelectUi from "@/ui/SelectUi";
import { useState } from "react";

function OrderHistory() {
  const [sort, setSort] = useState();
  const selectContent = [
    {
      group: "Sort By",
      item: [
        "Recent",
        "Old",
        "Accending",
        "Decending",
        "5 Star",
        "4 Star",
        "3 Star",
        "2 Star",
        "1 Star",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      <SelectUi
        placeholder="Sort By"
        select={sort}
        setSelect={setSort}
        selectContent={selectContent}
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <FadeinBox>
          <OrderCard history={true} />
        </FadeinBox>
        <FadeinBox delay={0.1}>
          <OrderCard history={true} />
        </FadeinBox>
        <FadeinBox delay={0.2}>
          <OrderCard history={true} />
        </FadeinBox>
        <FadeinBox delay={0.3}>
          <OrderCard history={true} />
        </FadeinBox>
        <FadeinBox delay={0.4}>
          <OrderCard history={true} />
        </FadeinBox>
      </div>
    </div>
  );
}

export default OrderHistory;
