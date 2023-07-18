import React from "react";
import Button from "../common/button";
import Image from "next/image";
import visa from "../../../public/assets/logo/visa-logo.png";
import mastercard from "../../../public/assets/logo/mastercard-logo.png";

const PaymentInfo = ({ onButtonClick }) => {
  return (
    <div className="border-2 w-2/3 flex flex-col rounded-[30px] drop-shadow-lg my-32 mx-auto px-12">
      <div className="mb-14 my-14">
        <h3 className="text-left text-2xl font-semibold">Payment Infomation</h3>
      </div>
      <div className="flex gap-5 mx-auto">
        <Button label="Credit card" width="w-72" />
        <Button
          label="Paypal"
          width="w-72"
          bgColor="bg-gray-40"
          textColor="text-gray-60"
        />
      </div>
      <div className="flex justify-end gap-3 mt-8 mb-3">
        <Image
          src={visa}
          // width={30}
          height={30}
          width={50}
          alt="visa logo"
        />
        <Image src={mastercard} width={30} alt="mastercard logo" />
      </div>
      <form className="gap-3 mx-autow-full ">
        <input
          className="block w-full border-2 h-10 rounded-full pl-5 mb-6 text-gray-80"
          type="text"
          defaultValue="card number"
        ></input>
        <div className="flex gap-5 mx-auto mb-6">
          <input
            className="w-72 border-2 h-10 rounded-full pl-5 text-gray-80"
            type="text"
            defaultValue="expiry(MM/YY)"
          ></input>
          <input
            className="w-72 border-2 h-10 rounded-full pl-5 text-gray-80"
            type="text"
            defaultValue="CVV"
          ></input>
        </div>
      </form>
      <div className="border-2 w-full mb-6"></div>
      <div className="flex justify-between">
        <h5 className="text-lg">Total Amount</h5>
        <h5 className="text-lg">$100</h5>
      </div>
      <div className="flex justify-between gap-24 py-14">
        <Button
          label="Back"
          width="w-[161px]"
          bgColor="bg-gray20"
          textColor="text-gray-60"
          onClick={onButtonClick}
        />
        <Button label="Donate" width="w-[161px]" />
      </div>
    </div>
  );
};

export default PaymentInfo;
