import React from "react";
import classNames from "classnames";
import Image from "next/image";
import ContentBlock from "./contentBlock";

const MainJumbotron = ({
  title,
  description,
  image,
  imagePosition = "left" | "right",
  bgColor,
  fontColor,
  btnColor,
  btnTextColor,
}) => {
  return (
    <div
      className={classNames("w-full p-10 md:p-32", bgColor || "bg-gray-300")}
    >
      <div
        className={classNames("flex flex-col md:flex-row", {
          "md:flex-row-reverse": imagePosition === "right",
        })}
      >
        {image && (
          <div className="flex justify-center w-full md:w-1/2 mb-10 md:mb-0">
            <Image
              src={image}
              alt="image description"
              width={600}
              height={600}
            />
          </div>
        )}
        <ContentBlock
          title={title}
          description={description}
          btnColor={btnColor}
          btnTextColor={btnTextColor}
          className="w-full md:w-1/2"
        />
      </div>
    </div>
  );
};

export default MainJumbotron;
