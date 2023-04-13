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
    <div className={classNames("w-full p-32", bgColor || "bg-gray-300")}>
      {imagePosition === "left" && image && (
        <div className="flex gap-28 items-center">
          <div>
            <Image
              src={image}
              alt="image description"
              width={600}
              height={600}
            />
          </div>
          <ContentBlock
            title={title}
            description={description}
            btnColor={btnColor}
            btnTextColor={btnTextColor}
          />
        </div>
      )}
      {imagePosition === "right" && image && (
        <div className="flex gap-28 items-center">
         <ContentBlock
            title={title}
            description={description}
            btnColor={btnColor}
            btnTextColor={btnTextColor}
          />
          <div>
            <Image
              src={image}
              alt="image description"
              width={600}
              height={600}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainJumbotron;
