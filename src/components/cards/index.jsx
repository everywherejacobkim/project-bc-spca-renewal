import Image from "next/image";
import React, { useState } from "react";

function CardBtn(){
    return (
       <button class='rounded-full border-2 w-24 px-3'>View More</button>
    )
}

const Cards = ()=> {
  return (
    <div class='mx-[240px]'>
      <h2 class='text-2xl text-center py-[43px]'>How you can give to animals</h2>
     <div class="flex flex-row gap-4">
        <div class='border-2 p-5 rounded'>
            <div class="flex items-center">
                <img src="../../icons/heart.png" alt='#' />
                <h3>Care for puppie</h3>
            </div>
            <p class='py-6'>We've seen as increase in puppies comming through out doors in recent months</p>
            <CardBtn />
        </div>
        <div class='border-2 p-5 rounded'>
            <div class="flex items-center">
                <img src="../../icons/heart.png" alt='#' />
                <h3>Adopt A Kennel</h3>
            </div>
            <p class='py-6'>You can help provide for their care by purchasing a plaque on one of our animal spaces</p>
            <CardBtn />
        </div>
        <div class='border-2 p-5 rounded'>
            <div class="flex items-center">
                <img src="../../icons/heart.png" alt='#' />
                <h3>Pet Food</h3>
            </div>
            <p class='py-6'>Pet food and supplies are needed at branches that have outreach programs.</p>
            <CardBtn />
       </div>
     </div>
     
     
    </div>
  )
}

export default Cards;
