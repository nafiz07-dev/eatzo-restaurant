import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";
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
export const description = "A line chart with a label";
// const chartData = [
//   { month: "Sat", revenue: 186 },
//   { month: "Sun", revenue: 305 },
//   { month: "Mon", revenue: 237 },
//   { month: "Tus", revenue: 73 },
//   { month: "Wed", revenue: 209 },
//   { month: "Thu", revenue: 214 },
//   { month: "Fri", revenue: 214 },
// ];
// const chartConfig = {
//   revenue: {
//     label: "revenue",
//     color: "var(--chart-1)",
//   },
// };

const chartData = [
  { month: "January", revenue: 186 },
  { month: "February", revenue: 305 },
  { month: "March", revenue: 237 },
  { month: "April", revenue: 73 },
  { month: "May", revenue: 209 },
  { month: "June", revenue: 214 },
];
const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-2)",
  },
};

// TODO: Load and design the data for the chart from server.
// TODO: Let user select the range, weekly, monthly, yearly
// TODO: add money symbol in front of revenue!!
// FIXME: The data structure is messed up, upon changing the names the hole thing brocks.

export function ChartLineLabel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Over Time</CardTitle>
        <CardDescription>As of August 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="revenue"
              type="natural"
              stroke="var(--color-revenue)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-revenue)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing total revenue for the week
        </div>
      </CardFooter>
    </Card>
  );
}

export default ChartLineLabel;
