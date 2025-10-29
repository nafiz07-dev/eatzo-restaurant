// TODO: I have to add infinite scroll to this.
// TODO: Upon click all the details of the income.

import PaymentHistoryCard from "@/features/Payment/PaymentHistoryCard";
import FadeinBox from "@/motion/FadeinBox";
import SelectUi from "@/ui/SelectUi";
import { useState } from "react";

// Shows all the payment activities here.
function PaymentHistory() {
  const [sort, setSort] = useState();
  const selectContent = [
    {
      group: "Sort by",
      item: [
        "Recent",
        "Old",
        "High to Low",
        "Low to High",
        "Acending",
        "Decending",
      ],
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
        <PaymentHistoryCard amount={500} />
      </FadeinBox>
      <FadeinBox delay={0.1}>
        <PaymentHistoryCard amount={400} />
      </FadeinBox>
      <FadeinBox delay={0.2}>
        <PaymentHistoryCard withdraw={true} amount={300} />
      </FadeinBox>
      <FadeinBox delay={0.3}>
        <PaymentHistoryCard amount={100} />
      </FadeinBox>
      <FadeinBox delay={0.4}>
        <PaymentHistoryCard withdraw={true} amount={200} />
      </FadeinBox>
      <FadeinBox delay={0.5}>
        <PaymentHistoryCard withdraw={true} amount={150} />
      </FadeinBox>
      <FadeinBox delay={0.6}>
        <PaymentHistoryCard amount={100} />
      </FadeinBox>
    </div>
  );
}

export default PaymentHistory;
