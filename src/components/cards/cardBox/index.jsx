import Image from "next/image";
import React, { useState } from "react";

function CardBtn() {
  return (
    <button className='py-2 rounded-full border-2 w-24'>Button</button>
  )
}

const CardBox = () => {

  const menuData = [
    { title: 'Care for puppie', desc: 'Weve seen as increase in puppies comming through out doors in recent months', imgUrl: require("../../../../public/assets/icons/heart.png") },
    { title: 'Adopt A Kennel', desc: 'You can help provide for their care by purchasing a plaque on one of our animal spaces', imgUrl: require("../../../../public/assets/icons/house.png") },
    { title: 'Pet Food', desc: 'Pet food and supplies are needed at branches that have outreach programs.', imgUrl: require("../../../../public/assets/icons/paw.png") }
  ];

  return (
    <div className='mx-auto sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 py-8'>
      <h2 className='text-2xl text-center pb-8'>How you can give to animals</h2>
      <div className="flex flex-row flex-wrap justify-center gap-6  mx-12 ">
        {menuData.map((menu, index) => (
          <div key={index} className='border-2 p-5 rounded w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <div className="flex justify-center">
              {/** need to fix icon size*/}
              <Image
                src={menu.imgUrl}
                alt='icon'
              />

              <h3 className='pl-4 text-xl'>{menu.title}</h3>
            </div>
            <p className='py-6'>{menu.desc}</p>
            <CardBtn />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardBox;

