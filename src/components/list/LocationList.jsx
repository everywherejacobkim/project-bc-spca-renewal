import React from "react";
import LocationCard from "../card/LocationCard";
import Button from "../common/button";

const LocationList = ({
  cardItems,
  searchValue,
  filteredItems,
  setFilteredItems,
}) => {
  const handleButtonClick = (type) => {
    if (type === "All") {
      setFilteredItems(cardItems);
    } else if (type === "Adoption") {
      const filteredAdoptionItems = cardItems.filter(
        (item) => item.isAdoptionAvailable
      );
      setFilteredItems(filteredAdoptionItems);
    } else if (type === "Volunteer") {
      const filteredVolunteerItems = cardItems.filter(
        (item) => item.isVolunteerAvailable
      );
      setFilteredItems(filteredVolunteerItems);
    }
  };

  const handleSearch = () => {
    const filteredSearchItems = cardItems.filter((item) =>
      item.locationTitle.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredItems(filteredSearchItems);
  };

  return (
    <div className="flex flex-col items-start">
      <span>
        <h1 className="text-3xl font-bold ml-8">All BC SPCA Locations</h1>
        <p className="text-xs ml-8 mt-2">
          Showing all 25 locations within 200km from Vancouver, BC
        </p>
      </span>
      <div className="flex gap-2 ml-8 mt-4">
        <Button label="All" onClick={() => handleButtonClick("All")} />
        <Button
          label="Adoption"
          onClick={() => handleButtonClick("Adoption")}
        />
        <Button
          label="Volunteer"
          onClick={() => handleButtonClick("Volunteer")}
        />
      </div>
      <div className="flex justify-center ml-4 mt-5 overflow-y-scroll max-h-96">
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>
              <LocationCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocationList;
