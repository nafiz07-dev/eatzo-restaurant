import { SidebarTrigger } from "@/components/ui/sidebar";
import { Settings, Bell, BadgeTurkishLira } from "lucide-react";

function Nav() {
  return (
    <nav className="flex justify-between items-center p-2 border-b w-full bg-white/60 sticky top-0 z-50 backdrop-blur-md ">
      <SidebarTrigger />

      <div className="flex gap-3 items-center mr-2">
        <div className="border border-border rounded-xl px-3 py-1 flex gap-1 items-center">
          <BadgeTurkishLira size={17} />
          <span className="text-sm">0.00</span>
        </div>
        <Bell className="cursor-pointer" />
        <Settings className="cursor-pointer" />
      </div>
    </nav>
  );
}

export default Nav;
