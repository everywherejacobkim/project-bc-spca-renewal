import React from "react";
import Image from "next/image";

const ImageList = ({ images }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center rounded-xl"
          >
            <Image
              src={image}
              alt="image description"
              width={300}
              height={300}
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
