import React from 'react'
import adoptionDog from "../../../public/assets/images/woman.png"
import Image from 'next/image'
import classNames from 'classnames'
// import DonationBox from '@/pages/donation/donationBox'
// import DonationImage from '@/pages/donation/donationImage'


const Hero = ({
    title,
    desc,
    titleSize,
    descSize,
    fontColor,
}) => {
    return (
        <div>
            <div className='relative'>
                <Image 
                src={adoptionDog}
                alt="adoptionHero"
                width="100vw"
                height="100vh"
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                />
                <h1 className={classNames(
                    'absolute top-40 left-10 w-[403px]',
                    titleSize, fontColor
                )}>{title}</h1>
                <p className={classNames(
                    'absolute top-80 left-10 w-1/2',
                    descSize,
                    fontColor
                )}>{desc}</p>
            </div>
            <div className='flex justify-center mx-36 m-auto border-2 gap-2'>
                {/* <DonationBox />
                <DonationImage /> */}
            </div>
        </div>
    );
}

export default Hero;


