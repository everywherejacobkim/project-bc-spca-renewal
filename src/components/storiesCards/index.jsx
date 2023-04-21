import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import classNames from 'classnames';


const StoryCard = ({
  storiesData,
  textSize,
  textColor,
}) => {

 
  return (
    <div className='flex flex-col mx-8 md:px-28 md:mb-28'>
     <h3 className='text-4xl lg:text-left mx-20 mb-8 mt-12 md:mb-16 md:mt-24 font-semibold md:text-center'>Adoption Stories</h3>
      <div className='flex flex-col md:flex-row md:justify-center md:gap-6'>
        {storiesData.map((story, index) => (
          <div key={index} className='mb-8 md:mb-0 md:w-1/2 lg:w-1/3 xl:w-5/12 text-left border-2 rounded'>
            <Image
              src={story.imgUrl}
              alt='adption image'
              width={500}
              height={500}
              layout='responsive'
            />
            <div className='p-6'>
              <h4 className={classNames(
                'font-semibold',
                textSize='text-xl'
              )}>{story.title}</h4>
              <p className={classNames(
                'mt-1 mb-4',
              )}>Adopted {story.date}</p>
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
