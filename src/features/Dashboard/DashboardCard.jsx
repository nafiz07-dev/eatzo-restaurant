import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TrendingUp, ChevronRight, TrendingDown } from "lucide-react";
import { useState } from "react";
import DropDownUi from "@/ui/DropDownUi";
import { Skeleton } from "@/components/ui/skeleton";

function DashboardCard({
  title,
  number,
  updown,
  hideRange = true,
  stats = true,
  isLoading = false,
  range,
  setRange,
}) {
  // updown -- {up: true, value: 20}
  // hideRange -- don't need range for some card. ture/false
  // stats -- don't need stats for some card. ture/false

  // TODO: Dynamically set the up/down status.

  // FEATURE: Upon clicking on the card beside range, it will redirect to the corosponding page.

  // For dropdown
  const droplist = ["Today", "This Week", "This Month", "All Time"];
  // number === "৳undefined.00", for a split second, the number is showing undefined before setting to skeleton.

  return (
    <Card>
      <CardHeader>
        <CardDescription className="text-[16px]">{title}</CardDescription>
        {isLoading || number === "৳undefined.00" ? (
          <Skeleton className="w-25 h-7" />
        ) : (
          <CardTitle className="text-xl">{number}</CardTitle>
        )}

        <CardAction>
          {hideRange && (
            <DropDownUi
              dropdown={range}
              setDropdown={setRange}
              DropContent={droplist}
            />
          )}
        </CardAction>
      </CardHeader>
      <CardContent className="flex justify-between items-center cursor-pointer">
        {stats ? (
          <p className="flex items-center gap-2 ">
            {updown.up ? "Up" : "Down"} by {updown.value}% from last day
            {updown.up ? (
              <TrendingUp size={20} color="green" />
            ) : (
              <TrendingDown size={20} color="red" />
            )}
          </p>
        ) : (
          <p>View {title}</p>
        )}
        <ChevronRight size={25} />
      </CardContent>
    </Card>
  );
}

export default DashboardCard;
