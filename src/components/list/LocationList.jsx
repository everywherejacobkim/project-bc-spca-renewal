import React from "react";
import LocationCard from "../card/LocationCard";
import Image1 from "../../../public/assets/svgs/location-1.svg";
import Image2 from "../../../public/assets/svgs/location-2.svg";

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
];

const LocationList = () => {
  return (
    <div className="w-1/2 h-screen flex justify-center items-center p-4 overflow-y-auto">
      <ul>
        <li>
          <LocationCard items={cardItems} />
        </li>
      </ul>
    </div>
  );
};

export default LocationList;
