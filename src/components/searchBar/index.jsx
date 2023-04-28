import React from "react";
import classNames from "classnames";

const SearchBar = ({ width }) => {
  return (
    <div className={classNames("hidden md:block ml-4 p-2", width || "w-32")}>
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
