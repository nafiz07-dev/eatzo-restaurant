import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
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
export const description = "A radar chart with dots";
const chartData = [
  { day: "Sat", item: 186 },
  { day: "Sun", item: 305 },
  { day: "Mon", item: 237 },
  { day: "Tus", item: 273 },
  { day: "Wed", item: 209 },
  { day: "Thu", item: 214 },
  { day: "Fri", item: 220 },
];
const chartConfig = {
  item: {
    label: "Sold item: ",
    color: "var(--chart-2)",
  },
};
function ChartRadarLabel() {
  return (
    <Card>
      <CardHeader className="items-center">
        <CardTitle>Number of Sold Items</CardTitle>
        <CardDescription>As of August 2024</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="day" />
            <PolarGrid />
            <Radar
              dataKey="item"
              fill="var(--color-item)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="text-muted-foreground flex items-center gap-2 leading-none">
          Showing numbers of sold items for the week.
        </div>
      </CardFooter>
    </Card>
  );
}

export default ChartRadarLabel;
