import { BellIcon, EnvelopeIcon, HamburguerIcon } from "../icons/Icons";
import Search from "./Search";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4">
      <button className="lg:hidden">
        <HamburguerIcon />
      </button>
      <div className="mx-4 flex-1">
        <Search />
      </div>
      <div className="flex items-center">
        <button className="relative mr-4">
          <BellIcon />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500" />
        </button>
        <button className="relative mr-4">
          <EnvelopeIcon />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500" />
        </button>
      </div>
    </header>
  );
};

export default Header;
