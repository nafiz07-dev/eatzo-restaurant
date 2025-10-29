import PaymentHistoryCard from "@/features/Payment/PaymentHistoryCard";
import FadeinBox from "@/motion/FadeinBox";
import SelectUi from "@/ui/SelectUi";
import { useState } from "react";

// Shows all the payment activities here.

function PaymentStatus() {
  const [sort, setSort] = useState();
  const selectContent = [
    {
      group: "Sort by",
      item: ["Accepted", "Cancel", "Pending"],
    },
  ];
  return (
    <div className="flex flex-col gap-3 lg:items-center">
      <SelectUi
        placeholder="Sort by"
        selectContent={selectContent}
        select={sort}
        setSelect={setSort}
      />
      <FadeinBox>
        <PaymentHistoryCard amount={500} accepted={true} />
      </FadeinBox>
      <FadeinBox delay={0.1}>
        <PaymentHistoryCard amount={400} pending={true} />
      </FadeinBox>
      <FadeinBox delay={0.2}>
        <PaymentHistoryCard amount={300} accepted={true} />
      </FadeinBox>
      <FadeinBox delay={0.3}>
        <PaymentHistoryCard amount={100} cancel={true} />
      </FadeinBox>
      <FadeinBox delay={0.4}>
        <PaymentHistoryCard amount={200} accepted={true} />
      </FadeinBox>
      <FadeinBox delay={0.5}>
        <PaymentHistoryCard amount={150} pending={true} />
      </FadeinBox>
      <FadeinBox delay={0.6}>
        <PaymentHistoryCard amount={100} pending={true} />
      </FadeinBox>
    </div>
  );
}

export default PaymentStatus;
