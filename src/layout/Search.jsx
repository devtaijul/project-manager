import { useContext } from "react";
import { SearchContext } from "../context";

const Search = () => {
  const { search, setSearch } = useContext(SearchContext);
  return (
    <input
      type="text"
      placeholder="Search here"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
    />
  );
};

export default Search;
