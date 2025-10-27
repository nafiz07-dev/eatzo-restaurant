import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Item, ItemTitle } from "@/components/ui/item";

function MenuStats() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Menu Details</CardTitle>
          <CardDescription>Statistics of menu.</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2">
          <div
            variant="outline"
            className="border-green-600 text-green-600 flex-1 border rounded-[8px] px-2 py-3"
          >
            <ItemTitle>Items: 6</ItemTitle>
          </div>
          <div
            variant="outline"
            className="border-red-600 text-red-600 flex-1 border rounded-[8px] px-2 py-3"
          >
            <ItemTitle>Disabled: 6</ItemTitle>
          </div>
          <div
            variant="outline"
            className="border-blue-600 text-blue-600 flex-1 border rounded-[8px] px-2 py-3"
          >
            <ItemTitle>Closed: 6</ItemTitle>
          </div>
        </CardContent>
      </Card>
      <Button className="mb-4 w-full sm:w-auto mt-3">
        <Plus /> Add Item
      </Button>
    </div>
  );
}

export default MenuStats;
