import Button from '@/components/common/button';
import React from 'react';

const DonationBox = () => {
    return (
        <div className='border-2 w-2/3 mx-auto flex flex-col items-center justify-center'>
            {/*question props*/}
            <h3>Donation Detail</h3>
            <p>Do you want to make this a montly gift?</p>
            <div className='flex  gap-5' >
            <Button label='Donate one time'  />
            <Button label='Donate Montly'  bgColor='bg-gray40' textColor='text-gray60' />
            </div>
        </div>
    );
}

export default DonationBox;
