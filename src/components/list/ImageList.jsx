import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const ImageList = ({ images }) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {images.map((image, index) => (
          <Link href={`/${image.link}`} key={index}>
            <div
              className="relative flex justify-center items-end rounded-xl bg-gray-20 hover:bg-light-blue cursor-pointer w-[296px] h-[296px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <div className="absolute top-0 left-0 mt-7 ml-6 text-xl font-bold">
                {image.title}
              </div>
              <div
                className={`absolute top-0 right-0 rounded-full p-3 mt-6 mr-6 ${
                  hoveredIndex === index
                    ? "bg-primary text-white"
                    : "bg-white hover:bg-primary hover:text-white"
                }`}
              >
                <AiOutlineArrowRight className="text-xl" />
              </div>
              <Image
                src={image.image}
                alt="image description"
                width={230}
                height={183}
                className="rounded-xl"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
