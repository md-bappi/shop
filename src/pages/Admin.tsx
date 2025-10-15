import { useState } from "react";
import { AiOutlineBarChart } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const sidebarData = [
  {
    title: "Dashboard",
    icon: <MdOutlineDashboard size={18} />,
    link: "/dashboard",
  },
  {
    title: "Orders",
    icon: <IoCartOutline size={18} />,
    link: "/orders",
  },
  { title: "Products", icon: <LuBox size={18} />, link: "/products" },
  {
    title: "Customers",
    icon: <FiUsers size={18} />,
    link: "/customers",
  },
  {
    title: "Analytics",
    icon: <AiOutlineBarChart size={18} />,
    link: "/analytics",
  },
  {
    title: "Settings",
    icon: <CiSettings size={18} />,
    link: "/settings",
  },
];

const Admin = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-screen flex bg-[var(--color-bg)]">
      {/* Sidebar */}
      <aside
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`transition-all duration-300 shadow-sm ${
          hovered ? "w-44" : "w-16"
        } bg-white border-r border-gray-200 flex-shrink-0 relative`}
      >
        {/* Sidebar Menu */}
        <nav className="mt-12">
          <ul className="space-y-1 px-1">
            {sidebarData.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-md mx-2 transition-all duration-200 ${
                      isActive
                        ? "bg-[var(--color-bg-btn)] text-white shadow-sm"
                        : "text-[var(--color-text)] hover:bg-gray-100"
                    }`
                  }
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {hovered && <span className="truncate">{item.title}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-100">
          {hovered ? (
            <div className="text-xs text-gray-500">
              © {new Date().getFullYear()} ShopCreate
            </div>
          ) : (
            <div className="text-center text-xs text-gray-400">
              © {new Date().getFullYear()}
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
