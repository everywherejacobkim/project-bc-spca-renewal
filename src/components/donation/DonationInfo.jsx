import React from "react";
import Button from "../common/button";

const DonationInfo = ({ onClick, onButtonClick }) => {
  return (
    <div className="w-full border-2 flex flex-col  rounded-[30px] my-12 mx-auto px-12 md:my-32 md:w-2/3 lg:w-2/3">
      <div className="drop-shadow-none">
        <div className="mb-14 my-14">
          <h3 className="text-left text-2xl font-semibold">
            Donation Information
          </h3>
        </div>
        <div>
          <form className="grid grid-cols-2 gap-3 mx-auto text-gray-80">
            <input
              className="border-2 h-10 rounded-full pl-5"
              type="text"
              placeholder="first name"
            ></input>
            <input
              className="border-2 h-10 rounded-full pl-5"
              type="text"
              placeholder="last name"
            ></input>
            <input
              className="border-2 h-10 rounded-full pl-5 sm:col-span-2"
              type="text"
              placeholder="email"
            ></input>
            <input
              className="border-2 h-10 rounded-full pl-5 sm:col-span-2"
              type="text"
              placeholder="phone"
            ></input>
            <input
              className="border-2 h-10 rounded-full  pl-5 sm:col-span-2"
              type="text"
              placeholder="street"
            ></input>
            <input
              className="border-2 h-10 rounded-full pl-5"
              type="text"
              placeholder="unit"
            ></input>
            <input
              className="border-2 h-10 rounded-full pl-5"
              type="text"
              placeholder="City"
            ></input>
            <input
              className="border-2 h-10 rounded-full pl-5 sm:order-[7]"
              type="text"
              placeholder="postal code"
            ></input>
            <input
              className="border-2 h-10 rounded-full pl-5 sm:col-span-2"
              type="text"
              placeholder="Province"
            ></input>
            <input
              className="border-2 h-10 rounded-full pl-5"
              type="text"
              placeholder="Country"
            ></input>
          </form>
          <div className="flex justify-between gap-24 py-14">
            <Button
              label="Back"
              width="w-[161px]"
              bgColor="bg-gray20"
              textColor="text-gray60"
              onClick={onButtonClick}
            />
            <Button label="Next Step" width="w-[161px]" onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationInfo;
