import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";

function DropDownUi({ dropdown, setDropdown, DropContent }) {
  // dropdown & setDropdown -- for controlling the dropdown
  // DropContent -- an array of droplist ["Accepted", "Prepearing", ...]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {dropdown} <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-45 ml-10 mb-5">
        <DropdownMenuRadioGroup value={dropdown} onValueChange={setDropdown}>
          {DropContent?.map((item) => (
            <DropdownMenuRadioItem value={item}>{item}</DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDownUi;
