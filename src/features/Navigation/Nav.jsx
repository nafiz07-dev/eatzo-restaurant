import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { routes } from "@/route";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Settings, Bell, BadgeTurkishLira } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NotificationCard from "../Notification/NotificationCard";

function Nav() {
  // For setting the header along with the url.
  const { pathname } = useLocation();
  const [header, setHeader] = useState("");

  useEffect(() => {
    // Flatten children so we can find matches easily
    const childRoutes = routes?.flatMap((r) => r.children || []);
    const matched = childRoutes?.find((r) => r.path === pathname);

    if (matched) setHeader(matched.title);
    else setHeader("");
  }, [pathname]);

  return (
    <nav className="flex justify-between items-center p-2 border-b w-full bg-white/60 sticky top-0 z-50 backdrop-blur-md ">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <h1 className="font-medium text-xl">{header}</h1>
      </div>

      <div className="flex gap-3 items-center mr-2">
        <div className="border border-border rounded-xl px-3 py-1 flex gap-1 items-center">
          <BadgeTurkishLira size={17} />
          <span className="text-sm">0.00</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Bell className="cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-100 mr-8 mt-5 px-3" align="start">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <div className="h-110 overflow-autos">
              <NotificationCard />
              <NotificationCard />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link to="/setting">
          <Settings className="cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
