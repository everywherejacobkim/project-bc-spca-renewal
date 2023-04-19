import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const StoryCard = () => {

  const storiesData = [
    { title: 'Clementine', date: '2022-12-11', desc: 'Clementine is a British Shorthair. She was one of a litter of four kittens who were surrendered to us as a result of a cruelty investigation on July 16, 2022......', imgUrl: require("../../../public/assets/images/test7.jpg") },
    { title: 'Pippy', date: '2022-12-11', desc: 'Clementine is a British Shorthair. She was one of a litter of four kittens who were surrendered to us as a result of a cruelty investigation on July 16, 2022......', imgUrl: require("../../../public/assets/images/test7.jpg") },
  ]
  return (
    <div className='flex flex-col mx-8 md:px-28 md:mb-28'>
     <h3 className='text-4xl lg:text-left mb-8 mt-12 md:mb-16 md:mt-24 font-semibold md:text-center'>Adoption Stories</h3>
      <div className='flex flex-col md:flex-row md:justify-center md:gap-6'>
        {storiesData.map((story, index) => (
          <div key={index} className='mb-8 md:mb-0 md:w-1/2 lg:w-1/3 xl:w-1/4 text-left border-2 rounded'>
            <Image
              src={story.imgUrl}
              alt='adption image'
              width={500}
              height={500}
              layout='responsive'
            />
            <div className='p-6'>
              <h4 className='font-semibold text-xl'>{story.title}</h4>
              <p className='text-sm mt-1 mb-4'>Adopted {story.date}</p>
              <p>{story.desc}</p>
              <div className='my-4 font-semibold'>
                <Link href="/">Read all</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StoryCard;
