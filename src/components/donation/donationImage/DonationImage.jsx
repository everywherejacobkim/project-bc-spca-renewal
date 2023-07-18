import Image from "next/image";
import React from "react";
import DonationImg from "../../../../public/assets/images/medical-fund-image.png";
import Button from "../../common/button";
import ProgressBar from "../../ProgressBar";

const DonationImage = () => {
  return (
    <div className="w-full my-0 border-2 shadow-lg rounded-[30px] mb-12 md:my-32 md:w-1/3 md:mx-auto lg:my-32lg:w-1/3  ">
      <div>
        <div>
          <Image
            src={DonationImg}
            alt="donation Image"
            sizes="100vw"
            style={{
              width: "100%",
              borderRadius: "4% 4% 0 0",
            }}
          />
        </div>
        <div className="px-8 mx-auto my-8">
          <div>
            <ProgressBar completed="60" />
            <h5 className="text-gray-80 inline">$435 left</h5>
          </div>
          <h4 className="pt-8 pb-3 font-semibold">Eli</h4>
          <p className="text-gray-100">
            This 5-month-old kitten was in rough shape after swallowing foreign
            objects and needed emergency surgery.
          </p>
          <div className="mt-8 mb-6">
            <Button
              label="Medical Emergency Fund Page"
              width="w-full"
              bgColor="bg-white"
              border="border-2"
              textColor="text-black"
              borderColor="border-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationImage;
