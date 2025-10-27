import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  ListOrdered,
  ClipboardCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

function BottomBar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, to: "/" },
    { name: "Orders", icon: ClipboardList, to: "/orders" },
    { name: "Menu", icon: ListOrdered, to: "/menu" },
    { name: "Manage", icon: ClipboardCheck, to: "/manage-orders" },
  ];

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 flex justify-around items-center border-t border-border bg-white/60 backdrop-blur-md z-50 transition-transform duration-300 md:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
    >
      {navItems.map(({ name, icon: Icon, to }) => (
        <NavLink
          key={name}
          to={to}
          end
          className={({ isActive }) =>
            `flex-1 flex justify-center items-center py-3 transition-all duration-200 ${
              isActive
                ? "text-primary scale-105"
                : "text-muted-foreground hover:text-foreground"
            }`
          }
        >
          <Icon className="h-6 w-6" strokeWidth={2.2} />
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomBar;
