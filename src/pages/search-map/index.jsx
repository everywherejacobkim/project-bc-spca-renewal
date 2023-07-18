import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import MapView from "@/components/mapView/MapView";
import LocationList from "@/components/list/LocationList";
import MapSearchBar from "../../components/searchBar/MapSearchBar";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Image1 from "../../../public/assets/svgs/location-1.svg";
import Image2 from "../../../public/assets/svgs/location-2.svg";
import Image3 from "../../../public/assets/svgs/location-3.svg";
import Image4 from "../../../public/assets/svgs/location-4.svg";
import Image5 from "../../../public/assets/svgs/location-5.svg";

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
    locationAddress: "100 Main Avenue",
    locationDistance: 2.5,
    isAdoptionAvailable: true,
    isVolunteerAvailable: true,
  },
  {
    id: 5,
    locationImage: Image5,
    locationTitle: "River District Office ",
    locationAddress: "8000 River District Crossing",
    locationDistance: 8.5,
    isAdoptionAvailable: false,
    isVolunteerAvailable: true,
  },
  {
    id: 6,
    locationImage: Image2,
    locationTitle: "North Vancouver Office",
    locationAddress: "1200 Marine Driver",
    locationDistance: 16.2,
    isAdoptionAvailable: true,
    isVolunteerAvailable: true,
  },
  {
    id: 7,
    locationImage: Image3,
    locationTitle: "South Vancouver Office",
    locationAddress: "200 w 49th Ave",
    locationDistance: 4.2,
    isAdoptionAvailable: true,
    isVolunteerAvailable: true,
  },
  {
    id: 8,
    locationImage: Image4,
    locationTitle: "Coquitlam Office",
    locationAddress: "2000 Barnet Hwy",
    locationDistance: 10.5,
    isAdoptionAvailable: true,
    isVolunteerAvailable: false,
  },
];

const SearchMap = () => {
  const [filteredItems, setFilteredItems] = useState(cardItems);
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-center md: gap-4 lg:gap-8">
        <div className="flex flex-col gap-10 mt-4">
          <span className="flex justify-between items-center font-semibold">
            <Link href="/">
              <button className="flex items-center text-gray-100 bg-transparent pt-4 px-4">
                <MdOutlineArrowBackIosNew className="mr-1" />
                Back
              </button>
            </Link>
            <MapSearchBar
              cardItems={cardItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setFilteredItems={setFilteredItems}
            />
          </span>
          <LocationList
            cardItems={cardItems}
            searchValue={searchValue}
            filteredItems={filteredItems}
            setFilteredItems={setFilteredItems}
          />
        </div>
        <MapView />
      </div>
      <Footer />
    </>
  );
};

export default SearchMap;
