import {
  Calendar,
  ChevronDown,
  Home,
  HomeIcon,
  Inbox,
  Search,
  Settings,
  Store,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
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
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Link } from "react-router-dom";

// Image import
import restLogo from "../../asets/Restaurants/rest-logo.png";
import eatzoLogo from "../../asets/eatzo-logo.png";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

function AppSidebar() {
  return (
    <Sidebar>
      {/* Sidebar Header Start */}
      <SidebarHeader className="mt-2 ml-2  ">
        <div className="flex gap-2">
          <img
            src={eatzoLogo}
            alt="Restaurant logo"
            className="w-10 rounded-xl object-cover"
          />
          <div>
            <h3 className="text-[16px] font-[400] text-black">The Fends</h3>
            <p className="text-sm opacity-70 mt-[-5px]">Restaurant</p>
          </div>
        </div>
      </SidebarHeader>
      {/* Sidebar header end-- */}

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-[400] text-sm">
            Platform
          </SidebarGroupLabel>
          {/* <SidebarGroupContent> */}
          {/* First */}
          {/* <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu> */}

          {/* Second */}
          <SidebarMenu>
            <Collapsible asChild defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className=" text-[16px] text-black">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    <span className="font-[350]">Home</span>
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <Link to="/home/test1">
                          <span>Test1</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>

                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <Link to="/home/test2">
                          <span>Test2</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>

                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <Link to="/home/test3">
                          <span>Test3</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            {/*  */}
            <Collapsible asChild className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className=" text-[16px] text-black">
                    <Store className="mr-2 h-4 w-4" />
                    <span className="font-[350]">Restaurant</span>
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <Link to="/home/test1">
                          <span>Test1</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>

                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <Link to="/home/test2">
                          <span>Test2</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>

                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <Link to="/home/test3">
                          <span>Test3</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            {/*  */}
          </SidebarMenu>
          {/* Sidebar Menu ends */}
          {/* </SidebarGroupContent> */}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
