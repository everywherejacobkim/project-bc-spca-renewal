import React, { useState } from "react";
import LocationCard from "../card/LocationCard";
import Image1 from "../../../public/assets/svgs/location-1.svg";
import Image2 from "../../../public/assets/svgs/location-2.svg";
import Image3 from "../../../public/assets/svgs/location-3.svg";
import Image4 from "../../../public/assets/svgs/location-4.svg";
import Image5 from "../../../public/assets/svgs/location-5.svg";
import Button from "../common/button";

const cardItems = [
  {
    id: 1,
    locationImage: Image1,
    locationTitle: "Vancouver Office ",
    locationAddress: "1205 E 7th Ave",
    locationDistance: 5.9,
    isAdoptionAvailable: true,
    isVolunteerAvailable: false,
  },
  {
    id: 2,
    locationImage: Image2,
    locationTitle: "Burnaby Office ",
    locationAddress: "4000 Grange Street",
    locationDistance: 12.5,
    isAdoptionAvailable: false,
    isVolunteerAvailable: true,
  },
  {
    id: 3,
    locationImage: Image3,
    locationTitle: "Richmond Office ",
    locationAddress: "1234 W Stone Avenue",
    locationDistance: 12.5,
    isAdoptionAvailable: false,
    isVolunteerAvailable: true,
  },
  {
    id: 4,
    locationImage: Image4,
    locationTitle: "Provincial Office ",
    locationAddress: "1234 W Stone Avenue",
    locationDistance: 12.5,
    isAdoptionAvailable: true,
    isVolunteerAvailable: true,
  },
  {
    id: 5,
    locationImage: Image5,
    locationTitle: "River District Office ",
    locationAddress: "1234 W Stone Avenue",
    locationDistance: 12.5,
    isAdoptionAvailable: false,
    isVolunteerAvailable: true,
  },
];

const LocationList = () => {
  const [filteredItems, setFilteredItems] = useState(cardItems);

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
