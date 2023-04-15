import React from "react";
import Image from "next/image";

const ImageList = ({ images }) => {
  return (
    <div className="flex justify-center gap-4">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={image}
              alt="image description"
              width={300}
              height={300}
              className="max-w-[200px] max-h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
