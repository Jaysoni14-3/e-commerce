import { LuSearch } from "react-icons/lu";

const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <div className="search-bar ms-auto flex mt-4">
      <div className="search-icon cursor-default w-8">
        <LuSearch
          size={18}
          className="h-full w-full px-2 text-lg rounded-l-lg border border-neutral-500 border-r-0 bg-neutral-300 dark:bg-neutral-600 text-textBlack dark:text-textWhite"
        />
      </div>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="px-2 py-1 min-w-[300px] text-textBlack dark:text-textWhite bg-transparent rounded-r-lg border border-neutral-500 border-l-0 outline-none"
        placeholder="search..."
        type="text"
        id="searchBar"
      />
    </div>
  );
};

export default SearchBar;
