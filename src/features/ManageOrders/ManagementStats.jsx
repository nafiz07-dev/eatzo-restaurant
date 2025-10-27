import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Item, ItemTitle } from "@/components/ui/item";

function ManagementStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Details</CardTitle>
        <CardDescription>Statistics of all orders.</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2">
        <div
          variant="outline"
          className="border-green-600 text-green-600 flex-1 border rounded-[8px] px-2 py-3"
        >
          <ItemTitle>Total: 6</ItemTitle>
        </div>
        <div
          variant="outline"
          className="border-blue-600 text-blue-600 flex-1 border rounded-[8px] px-2 py-3"
        >
          <ItemTitle>Prepearing: 6</ItemTitle>
        </div>
        <div
          variant="outline"
          className="border-red-600 text-red-600 flex-1 border rounded-[8px] px-2 py-3"
        >
          <ItemTitle>Canceled: 6</ItemTitle>
        </div>
      </CardContent>
    </Card>
  );
}

export default ManagementStats;
