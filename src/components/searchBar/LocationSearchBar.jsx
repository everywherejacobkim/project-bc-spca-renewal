import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";

const LocationSearchBar = ({
  label,
  placeholder,
  bgColor,
  btnColor,
  btnTextColor,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames("flex justify-center", bgColor || "bg-white")}
    >
      <div>
        <div className="mb-4 text-left px-2 font-semibold">
          <label>{label}</label>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex items-center mb-2 sm:mb-0">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder={placeholder}
              className="w-64 px-4 py-2 pl-10 bg-gray-200 border border-gray-300 rounded-3xl shadow-sm text-sm"
            />
            <span className="absolute left-3 text-gray-400">
              <RiSearchLine />
            </span>
          </div>
          <Link href="/search-map">
            <button
              type="submit"
              className={classNames(
                "mt-4 sm:mt-0 rounded-3xl py-2 px-6 sm:px-10",
                btnColor || "bg-primary",
                btnTextColor || "text-white"
              )}
            >
              Search
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LocationSearchBar;
