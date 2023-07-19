import Button from "@/components/common/button";
import React from "react";
import { useState } from "react";

const DonationBox = (props) => {
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [selectedWho, setSelectedWho] = useState("");

  const handleButtonForPeriod = (selection) => {
    setSelectedPeriod(selection);
  };

  const handleButtonForWho = (selection) => {
    setSelectedWho(selection);
  };

  return (
    <div className="border-2 w-full md:w-2/3 flex flex-col rounded-[30px] shadow-lg md:my-32 md:px-40">
      {/*question props*/}
      <div className="mx-auto md:w-full my-14 ">
        <h3 className="text-left text-2xl font-semibold mb-10">
          Donation Detail
        </h3>
        <p>Do you want to make this a monthly gift?</p>
        <div className="grid grid-cols-2 gap-5 mt-4 mb-8">
          <Button
            onClick={() => handleButtonForPeriod("Donate one time")}
            label="Donate one time"
            hoverBg="hover:bg-primary-light hover:text-white"
            bgColor="bg-gray-40"
            width="w-full"
            textColor="text-gray-60"
            className={
              selectedPeriod === "Donate one time"
                ? "bg-primary text-white"
                : "bg-gray-40 text-gray-60"
            }
          />
          <Button
            onClick={() => handleButtonForPeriod("Donate Monthly")}
            label="Donate Monthly"
            hoverBg="hover:bg-primary-light hover:text-white"
            bgColor="bg-gray-40"
            width="w-full"
            textColor="text-gray-60"
            className={
              selectedPeriod === "Donate Monthly" ? "bg-primary text-white" : ""
            }
          />
        </div>
        <p className="text-left mb-4">Who is making this donation?</p>
        <div className="grid grid-cols-2 gap-5 mt-4 mb-8">
          <Button
            onClick={() => handleButtonForWho("Individual")}
            label="Individual"
            hoverBg="hover:bg-primary-light hover:text-white"
            textColor="text-gray-60"
            width="w-full"
            bgColor="bg-gray-40"
            className={
              selectedWho === "Individual"
                ? "bg-primary text-white"
                : "bg-gray-40 text-gray-60"
            }
          />
          <Button
            onClick={() => handleButtonForWho("Organization")}
            label="Organization"
            hoverBg="hover:bg-primary-light hover:text-white"
            textColor="text-gray-60"
            width="w-full"
            bgColor="bg-gray-40"
            className={
              selectedWho === "Organization"
                ? "bg-primary text-white"
                : "bg-gray-40 text-gray-60"
            }
          />
        </div>
        <p>Select your amount</p>
        <div className="grid grid-cols-2 gap-5  mt-4 mb-8">
          <select className="pl-2 border-2 w-full h-10 rounded-full text-gray-60">
            <option default disabled>
              Select amount
            </option>
            <option value="50">&nbsp; $ 50</option>
            <option value="100">&nbsp; $ 100</option>
            <option value="150">&nbsp; $ 150</option>
          </select>
          <form className="border-2 w-full h-10 rounded-full text-gray-80">
            <input
              className="ml-5 mt-2 leading-3"
              type="number"
              placeholder="$ Other"
            />
          </form>
        </div>
        <div>
          <p>Are you making this git in honour of someone?</p>
          <select className="pl-2 border-2 w-full h-10 rounded-full mt-4 mb-2  text-gray-80">
            <option default>&nbsp; In Honour</option>
          </select>
          <form className="grid grid-cols-2 gap-5 text-gray-80">
            <input
              className="border-2 w-full h-10 rounded-full first-line:ml-5 mt-2 leading-3 pl-2"
              type="text"
              placeholder="   first name"
            />
            <input
              className="border-2 w-full  h-10 rounded-full mt-2 leading-3 pl-2"
              type="text"
              placeholder="   last name"
            />
          </form>
        </div>
        <div className="mt-14">
          <Button label="Next Step" width="w-full" onClick={props.onClick} />
        </div>
      </div>
    </div>
  );
};

export default DonationBox;
