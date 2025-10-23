import {
  Calendar,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  Home,
  HomeIcon,
  Inbox,
  Search,
  Settings,
  Store,
  Banknote,
  Soup,
  ChartLine,
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
import restLogo from "../../asets/Restaurants/rest-logo.png";
import restLogo1 from "../../asets/Restaurants/image.png";
import eatzoLogo from "../../asets/eatzo-logo.png";

function AppSidebar() {
  return (
    <Sidebar>
      {/* Sidebar Header Start */}
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
      {/* Sidebar header end-- */}

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-[400] text-sm">
            Platform
          </SidebarGroupLabel>

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
                          <span>New Orders</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>

                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <Link to="/home/test2">
                          <span>Order Progress</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>

                    <SidebarMenuSubItem>
                      <SidebarMenuButton asChild>
                        <Link to="/home/test3">
                          <span>Payment</span>
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
                    <Banknote className="mr-2 h-4 w-4" />
                    <span className="font-[350]">Payment</span>
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

            <Collapsible asChild className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className=" text-[16px] text-black">
                    <ChartLine className="mr-2 h-4 w-4" />
                    <span className="font-[350]">Statistics</span>
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

            <Collapsible asChild className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className=" text-[16px] text-black">
                    <Soup className="mr-2 h-4 w-4" />
                    <span className="font-[350]">Feedback</span>
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
