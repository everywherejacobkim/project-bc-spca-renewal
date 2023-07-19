import React from "react";
import adoptionDog from "../../../public/assets/images/woman.png";
import Image from "next/image";
import classNames from "classnames";

const Hero = ({ title, desc, fontColor }) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={adoptionDog}
          alt="adoptionHero"
          width="100vw"
          layout="responsive"
        />
        <h1
          className={classNames(
            "absolute font-bold md:top-40 lg:top-52 left-10 w-[403px] text-3xl top-20 md:text-4xl lg:text-5xl",
            fontColor
          )}
        >
          {title}
        </h1>
        <p
          className={classNames(
            "absolute md:top-56 lg:top-[333px] left-10 w-1/2 text-sm top-40 md:mt-10 md:text-lg lg:text-xl",
            fontColor
          )}
        >
          {desc}
        </p>
      </div>
      <div className="flex justify-center mx-36 m-auto border-2 gap-2"></div>
    </div>
  );
};

export default Hero;
