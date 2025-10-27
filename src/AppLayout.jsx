import { Outlet, useLocation } from "react-router-dom";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar";
import AppSidebar from "./components/ui/AppSidebar";
import Nav from "./features/Navigation/Nav";
import BottomBar from "./features/Navigation/BottomBar";
import { AnimatePresence, motion } from "framer-motion";

function AppLayout() {
  const location = useLocation();

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="">
        <Nav />

        <main className="p-4 flex-1 overflow-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname} // unique key for route transition
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <BottomBar />
      </SidebarInset>
    </SidebarProvider>
  );
}

export default AppLayout;
