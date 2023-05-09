import React from 'react'
import adoptionDog from "../../../public/assets/images/woman.png"
import Image from 'next/image'
import classNames from 'classnames'
import DonationBox from '@/pages/donation/donationBox'
import DonationImage from '@/pages/donation/donationImage'


const Hero = ({
    title,
    desc,
    titleSize,
    descSize,
    fontColor,
}) => {
    return (
        <div>
            <Image 
            src={adoptionDog}
            alt="adoptionHero"
            className='relative'
            width='100vw'
            />
            <h1 className={classNames(
                'absolute top-60 left-10 w-[403px]',
                titleSize, fontColor
            )}>{title}</h1>
            <p className={classNames(
                'absolute bottom-1/4 left-10 w-1/2',
                descSize,
                fontColor
            )}>{desc}</p>
            <div className='flex justify-center mx-36 m-auto border-2'>
                <DonationBox />
                <DonationImage className='w-1/2' />
            </div>
        </div>
    );
}

export default Hero;


