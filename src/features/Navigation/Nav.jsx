import { SidebarTrigger } from "@/components/ui/sidebar";
import { Settings, Bell, BadgeTurkishLira } from "lucide-react";

function Nav() {
  return (
    <nav className="flex justify-between items-center p-2 border-b">
      <SidebarTrigger />

      <div className="flex gap-3 items-center mr-2">
        <div className="border border-border rounded-xl px-3 py-1 flex gap-1 items-center">
          <BadgeTurkishLira size={17} />
          <span className="text-sm">0.00</span>
        </div>
        <Bell />
        <Settings />
      </div>
    </nav>
  );
}

export default Nav;
