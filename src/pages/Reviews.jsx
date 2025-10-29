import ReviewCard from "@/features/Review/ReviewCard";
import FadeinBox from "@/motion/FadeinBox";
import SelectUi from "@/ui/SelectUi";
import { useState } from "react";

function Reviews() {
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
    <div className="flex flex-col items-center gap-3">
      <SelectUi
        placeholder="Sort By"
        select={sort}
        setSelect={setSort}
        selectContent={selectContent}
      />
      <FadeinBox>
        <ReviewCard />
      </FadeinBox>
      <FadeinBox delay={0.1}>
        <ReviewCard />
      </FadeinBox>
      <FadeinBox delay={0.2}>
        <ReviewCard />
      </FadeinBox>
      <FadeinBox delay={0.3}>
        <ReviewCard />
      </FadeinBox>
    </div>
  );
}

export default Reviews;
