import Image from "next/image";
import React, { useState } from "react";

function CardBtn(){
    return (
       <button class='py-2 rounded-full border-2 w-24'>Button</button> 
       
    )
}

const CardBox = ()=> {

    const menuData = [
        {title:'Care for puppie', desc:'Weve seen as increase in puppies comming through out doors in recent months', imgUrl:require("../../../icons/heart.png") },
        {title:'Adopt A Kennel', desc:'You can help provide for their care by purchasing a plaque on one of our animal spaces', imgUrl:require("../../../icons/house.png") },
        {title:'Pet Food', desc:'Pet food and supplies are needed at branches that have outreach programs.',  imgUrl:require("../../../icons/paw.png")}
    ];

  return (
    <div class='mx-[20%] py-[7%]'>
      <h2 class='text-2xl text-center pb-8'>How you can give to animals</h2>
        <div class="flex flex-row">
                <div class="flex gap-4">
                {menuData.map((menu, index)=>(
                    <div key={index} class='border-2 p-5 rounded'>
                        <div class="flex">
                            {/** need to fix size*/}
                            <Image 
                            src={menu.imgUrl}
                            alt='icon'
                            />
                           
                            <h3 class='pl-4 text-xl'>{menu.title}</h3>
                        </div>
                        <p class='py-6'>{menu.desc}</p>
                        <CardBtn />
                    </div>
                    ))}
                </div>
        </div>
    </div>
  )
}

export default CardBox;
