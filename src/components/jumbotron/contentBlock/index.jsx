import React from "react";
import classNames from "classnames";
import { MdNavigateNext } from "react-icons/md";

// ContentBlockA has "Button" Button
export const ContentBlockA = ({
  title,
  description,
  fontColor,
  btnColor,
  btnText,
  btnTextColor,
  rootClass,
}) => {
  return (
    <div
      className={classNames(
        "md:w-1/2 text-left mt-[-10%]",
        fontColor || "text-black"
      )}
    >
      <h1 className="text-4xl tracking-wide font-bold mb-4">{title}</h1>
      <p className="text-lg">{description}</p>
      <button
        className={classNames(
          "px-8 py-4 mt-8 rounded-full shadow-md text-base font-semibold",
          btnColor || "bg-black",
          btnTextColor || "text-white",
          rootClass || ""
        )}
      >
        {btnText || "Button"}
      </button>
    </div>
  );
};

// ContentBlockB has "Learn more" Button
export const ContentBlockB = ({ title, description, fontColor, rootClass }) => {
  return (
    <div
      className={classNames("md:w-1/2 text-left", fontColor || "text-black")}
    >
      <h1 className="text-4xl tracking-wide font-bold mb-4">{title}</h1>
      <p className="text-lg">{description}</p>
      <button
        className={classNames("flex items-center py-2.5 mt-8", rootClass || "")}
      >
        Learn more
        <MdNavigateNext size={18} className="mt-0.5" />
      </button>
    </div>
  );
};
