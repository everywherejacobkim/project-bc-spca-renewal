import Button from '@/components/common/button';
import React from 'react';

const DonationBox = () => {
    return (
        <div className='border-2 w-1/2'>
            <h3>Donation Detail</h3>
            <p>Do you want to make this a montly gift?</p>
            <div className='flex gap-5' >
            <Button label='Donate one time' width='500' />
            <Button label='Donate Montly' width='500' />
            </div>
        </div>
    );
}

export default DonationBox;
