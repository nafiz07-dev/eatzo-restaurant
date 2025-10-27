import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import food1 from "../../asets/home-food/food1.jpg";
import { CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { EllipsisVertical, SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

function MenuItemCard() {
  return (
    <DropdownMenu>
      <Item variant="outline">
        <ItemHeader>
          <img
            src={food1}
            alt=""
            className="h-50 w-full rounded-sm object-cover"
          />
        </ItemHeader>

        <ItemContent className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>
                Chicken Biryani <span className="opacity-70">(20 sold)</span>
              </CardTitle>
              <div className="flex gap-2 mt-2">
                <div className="text-[16px]">৳250</div>
                <span className="flex gap-1 opacity-60">
                  (<Star size={17} /> 12)
                </span>
              </div>
            </div>

            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <EllipsisVertical />
              </Button>
            </DropdownMenuTrigger>
          </div>

          <Button>
            <SquarePen /> Edit
          </Button>
        </ItemContent>
      </Item>

      <DropdownMenuContent
        side="top"
        align="end"
        className="w-[--radix-popper-anchor-width]"
      >
        <DropdownMenuItem>Set Status</DropdownMenuItem>
        <DropdownMenuItem>
          <span className="text-red-600">Remove</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MenuItemCard;
