import { Outlet } from "react-router-dom";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar";
import AppSidebar from "./components/ui/AppSidebar";
import eatzoTranLogo from "./asets/eatzo-transparent.png";

function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="w-full">
        <nav className="flex justify-between items-center p-2 border-b">
          <SidebarTrigger />
          <img src={eatzoTranLogo} alt="eatzo logo" className="w-20" />
        </nav>

        <main className="p-4 flex-1 overflow-auto">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default AppLayout;
