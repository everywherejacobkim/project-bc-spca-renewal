import Button from '@/components/common/button';
import React from 'react';
import DonationInfo from '../DonationInfo';
import PaymentInfo from '../PaymentInfo';
import { useState } from 'react';
const DonationBox = (props) => {

    const [button1Disabled, setButton1Disabled] = useState(false);
    const [button2Disabled, setButton2Disabled] = useState(false);
    const [colorChange, setColorChange] = useState(false);
    
    const handleButton1Click = () => {
    setButton1Disabled(true);
    setButton2Disabled(false);
  };

    const handleButton2Click = () => {
    setButton1Disabled(false);
    setButton2Disabled(true);
  };

    return (
        <div className='border-2 w-2/3 flex flex-col  rounded-[30px] drop-shadow-lg my-32 mx-auto px-12'>
            {/*question props*/}
            <div className='mx-auto my-14 drop-shadow-none'>
                <h3 className='text-left text-2xl font-semibold mb-10'>Donation Detail</h3>
                <p>Do you want to make this a montly gift?</p>
                <div className='grid grid-cols-2 gap-5 mt-4 mb-8' >
                    <Button onClick={handleButton1Click} disabled={button1Disabled} label='Donate one time' bgColor='bg-gray-40' textColor='text-gray-60' width="w-full"  />
                    <Button onClick={handleButton1Click} disabled={button1Disabled} label='Donate Montly'   bgColor='bg-gray-40' textColor='text-gray-60' width="w-full"  />
                </div>
                <p className='text-left mb-4'>Who is making this donation?</p>
                <div className='grid grid-cols-2 gap-5 mt-4 mb-8' >
                    <Button label='Individual' textColor='text-gray-60' width="w-full"  bgColor='bg-gray-40'   />
                    <Button label='Organization' textColor='text-gray-60' width="w-full"   bgColor='bg-gray-40'  />
                </div>
                <p>Select your amount</p>
                <div className='grid grid-cols-2 gap-5  mt-4 mb-8'>
                    <select className='pl-2 border-2 w-full h-10 rounded-full text-gray-80'>
                        <option value="none">Select amount</option>
                        <option value="50">$50</option>
                        <option value="100">$100</option>
                        <option value="150">$150</option>
                    </select>
                    <form className='border-2 w-full h-10 rounded-full text-gray-80' >
                      
                        <input className="ml-5 mt-2 leading-3" type="text" defaultValue="$Other"  />
                     
                    </form>
                </div>
                <div>
                    <p>Are you making this git in honour of someone?</p>
                        <select className='pl-2 border-2 w-full h-10 rounded-full mt-4 mb-2  text-gray-80'>
                            <option value="none">In Honour</option>
                        </select>
                        <form className='grid grid-cols-2 gap-5 text-gray-80'>
                            <input className="border-2 w-full h-10 rounded-full first-line:ml-5 mt-2 leading-3 pl-2" type="text" defaultValue="first name"  />                            
                            <input className="border-2 w-full  h-10 rounded-full mt-2 leading-3 pl-2" type="text" defaultValue="last name"  />
                            
                        </form>
                </div>
                <div className='mt-14'>
                    <Button label="Next Step" width="w-full" onClick={props.onClick} />
                    
                </div>
                
            
            </div>
        </div>
    );
}

export default DonationBox;
