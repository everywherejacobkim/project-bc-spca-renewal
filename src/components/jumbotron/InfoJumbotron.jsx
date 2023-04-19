import React from "react";
import classNames from "classnames";
import Image from "next/image";
import { ContentBlockB } from "./contentBlock/index";

const InfoJumbotron = ({
  title,
  description,
  image,
  imagePosition = "left" | "right",
  bgColor,
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
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <Image
              src={image}
              alt="image description"
              width={600}
              height={600}
            />
          </div>
        )}
        <ContentBlockB
          title={title}
          description={description}
          rootClass="font-semibold"
          className="w-full md:w-1/2"
        />
      </div>
    </div>
  );
};

export default InfoJumbotron;
