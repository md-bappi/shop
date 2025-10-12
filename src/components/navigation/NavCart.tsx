import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const NavCart = () => {
  return (
    <Link href="/cart" className="relative">
      <IoCartOutline
        size={24}
        className="text-gray-700 hover:text-bg-btn-hover transition"
      />
      <span className="absolute -top-2 -right-2 bg-bg-btn text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
        2
      </span>
    </Link>
  );
};

export default NavCart;
