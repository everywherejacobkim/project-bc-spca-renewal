import Image from "next/image";
import classNames from "classnames";
import dogImage from "../../../public/assets/images/dog-cardBox.png";
import Link from "next/link";
import Button from "../common/button";

const CardBox = ({ cardData, cardBgColor, textSize, textColor }) => {
  return (
    <div className="py-8 mx-32 sm:mx-14">
      <div className="flex flex-row justify-center">
        <Image src={dogImage} alt="dog image" />
      </div>
      <h2 className="text-3xl md:text-4xl text-center pt-8 pb-8 font-bold sm:px-0">
        How you can give to animals
      </h2>
      <div className="grid sm:grid-cols-1 gap-6 md:grid-cols-3 md:mx-56 justify-center  ">
        {cardData.map((data, index) => (
          <div
            key={index}
            className={classNames(
              "border-2 rounded-3xl p-6 hover:bg-light-blue justify-self-center",
              cardBgColor
            )}
          >
            <div className={classNames("flex items-center")}>
              <Image
                src={data.imgUrl}
                alt="icon"
                width={20}
                height={20}
                className="h-5"
              />
              <h3
                className={classNames(
                  "pl-3 leading-9 font-semibold",
                  textSize || "text-xl",
                  textColor || "text-black"
                )}
              >
                {data.title}
              </h3>
            </div>
            <p className="h-24 pt-5 text-left">{data.desc}</p>
            <Link href="/404">
              <div className={classNames("flex flex-row justify-start")}>
                <Button
                  bgColor="bg-primary"
                  textColor="text-white"
                  hoverBg="hover:bg-primary-light"
                  label={data.btn}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardBox;
