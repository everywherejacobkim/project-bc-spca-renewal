import { useState } from "react";
import classNames from "classnames";

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
          className={classNames(
              "w-full rounded-xl mx-52 py-8",
              bgColor || "bg-gray-200"
            )}
    >
      <div className="w-5/6 flex-cols mx-20">
        <div className="mb-4 text-left px-2 font-semibold">
          <label>{label}</label>
        </div>
        <div className="flex gap-6">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="w-full px-4 py-2 border border-gray-300 rounded-3xl shadow-sm sm:text-sm"
          />
          <button
            type="submit"
            className={classNames(
              "items-center rounded-3xl py-2 px-10",
              btnColor || "bg-black",
              btnTextColor || "text-white"
            )}
          >
            Button
          </button>
        </div>
      </div>
    </form>
  );
};

export default LocationSearchBar;
