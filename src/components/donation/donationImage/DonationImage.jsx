import Image from 'next/image';
import React from 'react';
import DonationImg from '../../../../public/assets/images/medical-fund-image.png'
import Button from '../../common/button';
import ProgressBar from '../../ProgressBar';


const DonationImage = () => {
    return (
        <div className='w-1/3 border-2 my-32 rounded-[30px] '>
            <div>
                <div>
                    <Image 
                    src={DonationImg}
                    alt='donation Image'
                    width="w-full"
                    
                    />
                </div>
                <div className='px-8 mx-auto my-8'>
                    <div>
                        <ProgressBar completed="60" />
                        <h5 className='text-gray-80'>$435 left</h5>
                    </div>
                    <h4 className='pt-8 pb-3 font-semibold'>Eli</h4>
                    <p>This 5-month-old kitten was in rough shape after swallowing foreign objects and needed emergency surgery.</p>
                    <div className='mt-8 mb-6'>
                        <Button label="Medical Emergency Fund Page" width="w-full" bgColor="bg-white" border="border-2" textColor="text-black" />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default DonationImage;
