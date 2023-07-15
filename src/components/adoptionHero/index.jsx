import React from 'react'
import adoptionDog from "../../../public/assets/images/woman.png"
import Image from 'next/image'
import classNames from 'classnames'
// import DonationBox from '@/pages/donation/donationBox'
// import DonationImage from '@/pages/donation/donationImage'


const Hero = ({
    title,
    desc,
    fontColor,
}) => {
    return (
        <div>
            <div className='relative'>
                <Image 
                src={adoptionDog}
                alt="adoptionHero"
                width="100vw"
                layout="responsive"
                />
                <h1 className={classNames(
                    'absolute lg:top-52 left-10 w-[403px] sm:text-3xl sm:top-20 lg:text-5xl',
                    fontColor
                )}>{title}</h1>
                <p className={classNames(
                    'absolute lg:top-[333px] left-10 w-1/2 sm:text-sm sm:top-40 lg:text-xl',
                    fontColor
                )}>{desc}</p>
            </div>
            <div className='flex justify-center mx-36 m-auto border-2 gap-2'>

            </div>
        </div>
    );
}

export default Hero;


