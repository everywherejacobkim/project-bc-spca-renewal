import Image from "next/image";
import classNames from "classnames";
import dogImage from "../../../public/assets/images/dog-cardBox.png";
import Link from "next/link";
import Button from "../common/button";

const CardBox = ({ cardData, cardBgColor, textSize, textColor }) => {
  return (
    <div className="mx-auto sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 py-8">
      <div className="flex flex-row flex-wrap justify-center">
        <Image src={dogImage} alt="dog image" />
      </div>
      <h2 className="text-4xl text-center pb-8 font-bold">
        How you can give to animals
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-6  mx-2 ">
        {cardData.map((data, index) => (
          <div
            key={index}
            className={classNames(
              "border-2 p-5 rounded-3xl w-[296px] h-[232px] hover:bg-light-blue",
              cardBgColor
            )}
          >
            <div className={classNames("flex justify-start items-center")}>
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
                <Button hoverBg="hover:bg-primary-light" label={data.btn} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardBox;
