import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
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
export const description = "A bar chart with a custom label";

const chartConfig = {
  order: {
    label: "Order",
    color: "var(--chart-2)",
  },
  label: {
    color: "var(--background)",
  },
};

function ChartBarLabel({ rawBarData }) {
  // props unused: isLoading
  const days = ["Sat", "Sun", "Mon", "Tus", "Wed", "Thu", "Fri"];

  // Initialize all days with 0 orders
  const chartData = days?.map((day) => ({ day, order: 0 }));

  // Count orders per day
  rawBarData?.forEach((item) => {
    const date = new Date(item?.created_at);
    const dayIndex = date?.getDay(); // 0=Sun, 6=Sat

    // Convert JS day index to our custom order (Sat→Fri)
    const mapIndex = dayIndex === 6 ? 0 : dayIndex + 1;

    chartData[mapIndex].order += 1;
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Orders Per Day</CardTitle>
        <CardDescription>As of August 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="day"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="order" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="order"
              layout="vertical"
              fill="var(--color-order)"
              radius={4}
            >
              <LabelList
                dataKey="day"
                position="insideLeft"
                offset={8}
                className="fill-(--color-label)"
                fontSize={12}
              />
              <LabelList
                dataKey="order"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing total orders of the week
        </div>
      </CardFooter>
    </Card>
  );
}

export default ChartBarLabel;
