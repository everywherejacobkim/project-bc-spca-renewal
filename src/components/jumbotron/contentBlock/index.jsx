import React from "react";
import classNames from "classnames";

const ContentBlock = ({
  title,
  description,
  fontColor,
  btnColor,
  btnTextColor,
  rootClass,
}) => {
  return (
    <div className={classNames("w-1/2 text-left", fontColor || "text-black")}>
      <h1 className="text-4xl tracking-wide font-bold mb-4">{title}</h1>
      <p className="text-lg">{description}</p>
      <button
        className={classNames(
          "px-12 py-2.5 mt-8 rounded-full shadow-md",
          btnColor || "bg-black",
          btnTextColor || "text-white",
          rootClass || ""
        )}
      >
        Button
      </button>
    </div>
  );
};

export default ContentBlock;
