import {
  ChevronDown,
  ChevronsUpDown,
  HomeIcon,
  Store,
  Banknote,
  Soup,
  ChartLine,
  Archive,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Link } from "react-router-dom";

// Image import
import restLogo1 from "../../asets/Restaurants/image.png";
import eatzoLogo from "../../asets/eatzo-logo.png";
import NavDropDown from "@/features/Navigation/NavDropDown";

/*
 menu item:
  - Archive: all the past data for restaurant will stay here.
*/

const navContent = [
  {
    group: "Home",
    icon: <HomeIcon className="mr-2 h-4 w-4" />,
    defaultOpen: true,
    subItem: [
      { item: "Dashboard", url: "/" },
      { item: "New Orders", url: "/orders" },
      { item: "Manage Orders", url: "/manage-orders" },
    ],
  },
  {
    group: "Restaurant",
    icon: <Store className="mr-2 h-4 w-4" />,
    subItem: [
      { item: "Menu", url: "/menu" },
      { item: "Open & Closing Hour", url: "/open-close" },
      { item: "Edit Profile", url: "/profile" },
    ],
  },
  {
    group: "Payment",
    icon: <Banknote className="mr-2 h-4 w-4" />,
    subItem: [
      { item: "Payment History", url: "/payment-history" },
      { item: "Withdraw", url: "/withdraw" },
      { item: "Payment Status", url: "/payment-status" },
    ],
  },
  {
    group: "Analytics",
    icon: <ChartLine className="mr-2 h-4 w-4" />,
    subItem: [
      { item: "Order Stats", url: "/order-stats" },
      { item: "Item Stats", url: "/item-stats" },
      { item: "Income Stats", url: "/income-stats" },
    ],
  },
  {
    group: "Feedback",
    icon: <Soup className="mr-2 h-4 w-4" />,
    subItem: [{ item: "Reviews", url: "/reviews" }],
  },
  {
    group: "Archive",
    icon: <Archive className="mr-2 h-4 w-4" />,
    subItem: [{ item: "Order History", url: "/order-history" }],
  },
];

function AppSidebar({ setOpen }) {
  return (
    <Sidebar>
      <SidebarHeader className="mt-2 ml-2  ">
        <div className="flex gap-2">
          {/* Restaurant logo */}
          <img
            src={eatzoLogo}
            alt="Restaurant logo"
            className="w-10 rounded-xl object-cover"
          />
          <div>
            <h3 className="text-[16px] font-[400] text-black">Eatzo Inc</h3>
            <p className="text-sm opacity-70 mt-[-5px]">Enterprise</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-[400] text-sm">
            Platform
          </SidebarGroupLabel>

          <SidebarMenu>
            {navContent.map((group, key) => (
              <NavDropDown group={group} key={key} setOpen={setOpen} />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="overflow-visible mb-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="py-5">
                  <div className="flex gap-2 items-center">
                    {/* Restaurant logo */}
                    <img
                      src={restLogo1}
                      alt="Restaurant logo"
                      className="w-10 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="text-[16px] font-[400] text-black">
                        The Chefstars
                      </h3>
                      <p className="text-sm opacity-70 mt-[-5px]">Restaurant</p>
                    </div>
                  </div>
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="text-red-600">Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
