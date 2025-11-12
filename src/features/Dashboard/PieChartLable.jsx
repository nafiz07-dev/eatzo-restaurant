import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A pie chart with a label";

const chartColor = [
  { fill: "var(--color-item1)" },
  { fill: "var(--color-item2)" },
  { fill: "var(--color-item3)" },
  { fill: "var(--color-item4)" },
  { fill: "var(--color-item5)" },
];

const chartConfig = {
  items: {
    label: "Sold items",
  },
  item1: {
    color: "var(--chart-1)",
  },
  item2: {
    color: "var(--chart-2)",
  },
  item3: {
    color: "var(--chart-3)",
  },
  item4: {
    color: "var(--chart-4)",
  },
  item5: {
    color: "var(--chart-5)",
  },
};

// FIXME: The animation on mount for the chart is not working, maybe cause of dynamic loading, and also its buggy from the start.
// maybe redesigning the data config for the chart is what causing the problem.

function PieChartLable({ rawChartData }) {
  // {} in the end, cause we wanna add to object.
  const counts =
    rawChartData?.reduce((acc, cur) => {
      const key = cur.title;

      acc[key] = (acc[key] || 0) + 1;
      // acc["a"] = 2, a came twice
      // in nutshell: acc = acc + 1
      return acc;
    }, {}) || {};

  const chartRawData = Object.entries(counts)?.map(([item, sold]) => ({
    item,
    sold,
  }));

  // Sort by 'sold' descending and take top 7
  const top7ChartData = chartRawData
    .sort((a, b) => b.sold - a.sold) // highest first
    .slice(0, 5); // keep only first 7

  const chartData = top7ChartData.map((data, i) => ({
    ...data,
    ...chartColor[i % chartColor?.length],
  }));

  // const chartData = Object.entries(counts).map(([item, sold]) => ({item, sold}));
  // Object.entries(counts): [["a", 2], ["b", 1]]

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Most sold items.</CardTitle>
        <CardDescription>As of August 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[250px] pb-0"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              key={chartData.map((d) => d.item).join("-")}
              data={chartData}
              dataKey="sold"
              nameKey="item"
              label
              isAnimationActive={true}
              animationDuration={800}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing most sold items for the month of August
        </div>
      </CardFooter>
    </Card>
  );
}

export default PieChartLable;
