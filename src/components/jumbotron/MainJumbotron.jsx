import React from "react";
import classNames from "classnames";
import Image from "next/image";
import { ContentBlockA } from "./contentBlock/index";

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
      className={classNames(
        "w-full px-4 py-8 md:px-10 md:py-32",
        bgColor || "bg-gray-300"
      )}
    >
      <div
        className={classNames(
          "flex flex-col gap-8 md:flex-row",
          {
            "md:flex-row-reverse": imagePosition === "right",
          },
          "items-center"
        )}
      >
        {image && (
          <div className="w-full md:w-1/2">
            <Image
              src={image}
              alt="image description"
              width={600}
              height={600}
            />
          </div>
        )}
        <ContentBlockA
          title={title}
          description={description}
          fontColor={fontColor}
          btnColor={btnColor}
          btnTextColor={btnTextColor}
          className="w-full md:w-1/2"
        />
      </div>
    </div>
  );
};

export default MainJumbotron;
