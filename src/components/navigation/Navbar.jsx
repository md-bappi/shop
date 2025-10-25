import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavCart from "./NavCart";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-1 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Search Bar */}
        <SearchBar />

        {/* Right Section */}
        <div className="flex items-center gap-5">
          {/* Cart icon */}
          <NavCart />

          {/* Login Button */}
          <Link
            to="/login"
            className="bg-bg-btn text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-bg-btn-hover transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
