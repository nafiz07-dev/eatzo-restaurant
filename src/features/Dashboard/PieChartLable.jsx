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

const chartData = [
  { browser: "Biryani", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "Pao Vaji", visitors: 200, fill: "var(--color-safari)" },
  { browser: "Chop", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "Kacci", visitors: 173, fill: "var(--color-edge)" },
  { browser: "Teheri", visitors: 90, fill: "var(--color-other)" },
];
const chartConfig = {
  visitors: {
    label: "Sold items",
  },
  chrome: {
    label: "Biryani",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Pao Vaji",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Chop",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Kacci",
    color: "var(--chart-4)",
  },
  other: {
    label: "Teheri",
    color: "var(--chart-5)",
  },
};

// TODO: Load and design the data for the chart from server.
// FIXME: The data structure is messed up, upon changing the names the hole thing brocks.

function PieChartLable() {
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
            <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
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
