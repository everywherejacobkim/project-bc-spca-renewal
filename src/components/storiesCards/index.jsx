import Image from "next/image";
import Link from "next/link";
import React from "react";
import classNames from "classnames";

const StoryCard = ({ storiesData, textSize, textColor, cardBgColor }) => {
  function CovertDate() {
    let date = new Date(storiesData.date);
    console.log(date);
    /* Date format you have */
    let dateMDY = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    /* Date converted to MM-DD-YYYY format */
  }
  return (
    <div className="flex flex-col mx-8 md:px-28 md:mb-28">
      <h3 className="text-4xl lg:mx-20 sm:mx-0 mb-8 mt-12 md:mb-16 md:mt-24 font-semibold md:text-center">
        Adoption Stories
      </h3>
      <div className="md:flex sm:block md:justify-center md:gap-6">
        {storiesData.map((story, index) => (
          <div
            key={index}
            className={classNames(
              "mb-8 md:mb-0 text-left border-2 rounded-3xl relative ",
              cardBgColor
            )}
          >
            <Image
              src={story.imgUrl}
              alt="adption image"
              className="rounded-t-3xl"
              // width='fill'
              // height={200}
              layout="responsive"
            />
            <div className="p-6">
              <h4
                className={classNames("font-semibold", (textSize = "text-xl"))}
              >
                {story.title}
              </h4>
              <p className={classNames("mt-1 mb-4")}>Adopted {story.date}</p>
              <p>{story.desc}</p>
              <div className="my-4 font-semibold">
                <Link href="/">Read all</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryCard;
