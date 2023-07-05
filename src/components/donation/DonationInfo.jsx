import React from 'react';
import Button from '../common/button';

const DonationInfo = ({componentStack, onClick, onButtonClick }) => {

    
    return (
        <div  className='border-2 w-2/3 flex flex-col  rounded-[30px] drop-shadow-lg my-32 mx-auto px-12'>
           <div className='drop-shadow-none'>
                <div className='mb-14 my-14'>
                    <h3 className='text-left text-2xl font-semibold'>Donation Infomation</h3>
                </div>
                    <div>
                    <form className='grid grid-cols-2 gap-3 mx-auto text-gray-80 '> 
                    {/* <div className='flex'> */}
                
                        <input className="border-2 h-10 rounded-full pl-5" type="text" defaultValue="first name" ></input>
                        <input className="border-2 h-10 rounded-full pl-5" type="text" defaultValue="last name" ></input>
                    {/* </div>   is there any good other way?  */}
                        <input className="border-2 h-10 rounded-full pl-5" type="text" defaultValue="email" ></input>
                        <input className="border-2 h-10 rounded-full pl-5" type="text" defaultValue="phone" ></input>
                        <input className="border-2 h-10 rounded-full  pl-5" type="text" defaultValue="street" ></input>
                        <input className="border-2 h-10 rounded-full pl-5" type="text" defaultValue="unit" ></input>
                        <input className="border-2 h-10 rounded-full pl-5" type="text" defaultValue="City" ></input>
                        <input className="border-2 h-10 rounded-full pl-5" type="text" defaultValue="postal code" ></input>
                        <input className="border-2 h-10 rounded-full pl-5" type="text" defaultValue="Province" ></input>
                        <input className="border-2 h-10 rounded-full pl-5" type="text" defaultValue="Country" ></input>
                        
                    </form>
                    <div className='flex justify-between gap-24 py-14'>
                        <Button label="Back" width="w-[161px]" bgColor="bg-gray20" textColor="text-gray60" onClick={onButtonClick}/>
                        <Button label="Next Step" width="w-[161px]" onClick={onClick} />
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default DonationInfo;
