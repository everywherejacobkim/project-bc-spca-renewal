import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import discIcon from "../../../public/assets/svgs/disc.svg";
import xCircleIcon from "../../../public/assets/svgs/x-circle.svg";

const LocationCard = ({ item }) => (
  <div className="mt-2">
    <div
      key={item.id}
      className="relative w-[522px] h-[150px] shadow-sm rounded-3xl pt-5 mr-5 mb-3"
    >
      <div className="absolute left-3.5 top-1 rounded-full flex flex-col items-center">
        {item.locationImage ? (
          <Image
            width={156}
            height={138}
            src={item.locationImage}
            alt={item.locationTitle}
            className="object-contain rounded-sm"
          />
        ) : (
          <AiOutlineUser className="text-5xl border-2 border-black rounded-full" />
        )}
      </div>
      <div className="flex items-center ml-48 mt-1 text-gray-60">
        <div className="text-xs">{item.locationAddress}</div>
        <BsDot className="text-xs" />
        <p className="text-xs mr-2">{item.locationDistance}km</p>
      </div>
      <div className="ml-48">
        <div className="mt-1">
          <h3 className="text-base font-semibold">{item.locationTitle}</h3>
        </div>
        <div className="mt-2">
          {item.isAdoptionAvailable ? (
            <div className="flex gap-2 items-center">
              <Image src={discIcon} alt="disc-icon" />
              <p className="my-1 text-sm">Adoption available</p>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <Image src={xCircleIcon} alt="x-circle-icon" />
              <p className="my-1 text-sm">Adoption not available</p>
            </div>
          )}
          {item.isVolunteerAvailable ? (
            <div className="flex gap-2 items-center">
              <Image src={discIcon} alt="disc-icon" />
              <p className="my-1 text-sm">Volunteer available</p>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <Image src={xCircleIcon} alt="x-circle-icon" />
              <p className="my-1 text-sm">Volunteer not available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default LocationCard;
