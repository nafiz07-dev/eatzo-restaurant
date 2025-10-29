import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function NavDropDown({ group }) {
  const { toggleSidebar } = useSidebar(); // upon click on sub menu, toggle the navbar.

  /*
    {
    group: "Home",
    icon: <HomeIcon className="mr-2 h-4 w-4" />,
    subItem: [
      { item: "Dashboard", url: "/" },
      { item: "New Orders", url: "/orders" },
      { item: "Manage Orders", url: "/manage-orders" },
     ],
    },
    */
  function handleSidebarClick() {
    if (window.innerWidth <= 764) {
      toggleSidebar();
    }
  }

  return (
    <Collapsible defaultOpen={group.defaultOpen} className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className=" text-[16px] text-black">
            {group?.icon}
            <span className="font-[350]">{group?.group}</span>
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </SidebarMenuButton>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarMenuSub>
            {group.subItem?.map((item) => (
              <SidebarMenuSubItem key={item.url}>
                <SidebarMenuSubButton asChild>
                  <Link to={item.url} onClick={handleSidebarClick}>
                    {item.item}
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

export default NavDropDown;
