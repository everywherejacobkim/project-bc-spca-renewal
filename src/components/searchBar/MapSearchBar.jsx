import React from "react";
import { RiSearchLine } from "react-icons/ri";

const MapSearchBar = ({
  cardItems,
  searchValue,
  setSearchValue,
  setFilteredItems,
}) => {
  const handleSearch = () => {
    const filteredSearchItems = cardItems.filter((item) =>
      item.locationTitle.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredItems(filteredSearchItems);
  };

  return (
    <div className="flex items-center gap-2 ml-8 mt-4">
      <div className="relative w-full flex items-center mb-2 sm:mb-0">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Vancouver"
          className="w-full px-4 py-2 pl-10 bg-gray-200 border border-gray-300 rounded-3xl shadow-sm text-sm"
        />
        <span className="absolute left-3 text-gray-400">
          <RiSearchLine />
        </span>
      </div>
      <button
        className="mt-4 sm:mt-0 rounded-3xl py-2 px-4 md:px-8 bg-primary text-white"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default MapSearchBar;
