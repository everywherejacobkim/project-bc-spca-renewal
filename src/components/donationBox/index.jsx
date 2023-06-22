import Button from '@/components/common/button';
import React from 'react';

const DonationBox = ({questions}) => {
    return (
        <div className='border-2 w-2/3 flex flex-col justify-center rounded-[30px] drop-shadow-lg  my-32'>
            {/*question props*/}
            <div className='px-12 mx-auto my-14 '>
                <h3 className='text-left text-2xl font-semibold mb-10'>Donation Detail</h3>
                <p>Do you want to make this a montly gift?</p>
                <div className='flex gap-5 mt-4 mb-8' >
                    <Button label='Donate one time' width="w-60"  />
                    <Button label='Donate Montly' width="w-60"  bgColor='bg-gray40' textColor='text-gray60' />
                </div>
                <p className='text-left mb-4'>Who is making this donation?</p>
                <div className='flex  gap-5 mt-4 mb-8' >
                    <Button label='Individual' width="w-60"   />
                    <Button label='Organization' width="w-60"  bgColor='bg-gray40' textColor='text-gray60' />
                </div>
                <p>Select your amount</p>
                <div className='flex justfy-center gap-5  mt-4 mb-8'>
                    <select className='pl-2 border-2 w-60 h-10 rounded-full'>
                        <option value="none">Select amount</option>
                        <option value="50">$50</option>
                        <option value="100">$100</option>
                        <option value="150">$150</option>
                    </select>
                    <form className='border-2 w-60 h-10 rounded-full' >
                        <label>
                        <input className="ml-5 mt-2 leading-3" type="text" defaultValue="$Other"  />
                        </label>
                    </form>
                </div>
                <div>
                    <p>Are you making this git in honour of someone?</p>
                        <select className='pl-2 border-2 w-full h-10 rounded-full mt-4 mb-2'>
                            <option value="none">In Honour</option>
                        </select>
                        <form className='flex gap-5'>
                            <label className='border-2 w-60 h-10 rounded-full'>
                            <input className="ml-5 mt-2 leading-3" type="text" defaultValue="first name"  />
                            </label>
                            <label className='border-2 w-60 h-10 rounded-full'>
                            <input className="ml-5 mt-2 leading-3" type="text" defaultValue="last name"  />
                            </label>
                        </form>
                </div>
                <div className='mt-14'>
                    <Button label="Next Step" width="w-full" />
                </div>
            </div>
        </div>
    );
}

export default DonationBox;
