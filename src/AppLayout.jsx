import { Outlet } from "react-router-dom";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar";
import AppSidebar from "./components/ui/AppSidebar";
import Nav from "./features/Navigation/Nav";

function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="w-full bg-[#FAFAFA] ">
        <Nav />

        <main className="p-4 flex-1 overflow-auto">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default AppLayout;
