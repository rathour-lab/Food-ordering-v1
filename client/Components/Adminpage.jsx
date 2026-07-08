import { NavLink, Outlet ,useLocation,Navigate} from "react-router-dom";
import logo from "../src/assets/logo.png";
import { FaBell, FaUser } from "react-icons/fa";

const Adminpage = () => {


  const navStyle = ({ isActive }) =>
    `block px-4 py-3 rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-orange-500 text-white font-semibold shadow-md"
        : "text-gray-700 hover:bg-gray-100 hover:text-orange-500"
    }`;

  const isToken = document.cookie.includes("token=");
console.log("Cookie:", document.cookie);
console.log("isToken:", isToken);

  if (!isToken) {
    return <Navigate to="/" replace />;
  }
  
  return (

    <div className="h-screen flex flex-col bg-gray-100">
      {/* Top Navbar */}
      <nav className="h-20 bg-white shadow-md flex items-center justify-between px-8 z-50">
        <img
          src={logo}
          alt="Logo"
          className="h-14 md:h-16 rounded-full"
          />

        <div className="flex items-center gap-6">
          <FaBell className="text-2xl cursor-pointer" />

          <div className="flex items-center gap-2 cursor-pointer">
            <FaUser className="text-2xl" />
            <h3 className="font-medium">Admin Name</h3>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-5 space-y-3 overflow-y-auto">
          <NavLink to="dashboard" className={navStyle}>
            Dashboard
          </NavLink>

          <NavLink to="menu" className={navStyle}>
            Menu
          </NavLink>

          <NavLink to="orders" className={navStyle}>
            Orders
          </NavLink>

          <NavLink to="reservation" className={navStyle}>
            Reservations
          </NavLink>
        </aside>

        {/* Main Content */}

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );

};

export default Adminpage;