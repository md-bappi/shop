import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <form className="flex items-center bg-gray-100 rounded-md px-2 py-1 w-52 sm:w-64 transition">
      <FiSearch className="text-gray-500 mr-2" size={18} />
      <input
        type="text"
        placeholder="Search products..."
        className="bg-transparent outline-none text-sm w-full"
      />
    </form>
  );
};

export default SearchBar;
