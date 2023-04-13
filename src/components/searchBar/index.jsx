import React from "react";

const SearchBar = () => {
  return (
    <div className="hidden md:block w-1/6 ml-4 p-2">
      <input
        type="text"
        name="search"
        id="search"
        className="focus:ring-gray-500 focus:border-gray-500 block w-full p-2 sm:text-sm border border-black rounded-full"
        placeholder="search"
      />
    </div>
  );
};

export default SearchBar;
