import React from 'react';
import Button from '../common/button';

const DonationInfo = () => {

    
    return (
        <div  className='border-2 w-2/3 flex flex-col justify-center rounded-[30px] drop-shadow-lg my-32'>
           
                <div className='px-12 mx-auto my-14 '>
                    <h3 className='text-left text-2xl font-semibold mb-10'>Donation Infomation</h3>
                </div>  
                <form className='flex gab-5 flex-wrap'> 
                    {/* <div className='flex'> */}
                
                        <input className="w-1/2 border-2 h-10 rounded-full pl-5" type="text" defaultValue="first name" ></input>
                        <input className="w-1/2 border-2 h-10 rounded-full" type="text" defaultValue="last name" ></input>
                    {/* </div>   is there any good other way?  */}
                        <input className="w-1/2 border-2 h-10 rounded-full" type="text" defaultValue="email" ></input>
                        <input className="w-1/2 border-2 h-10 rounded-full" type="text" defaultValue="phone" ></input>
                        <input className="w-2/3 border-2 h-10 rounded-full " type="text" defaultValue="street" ></input>
                        <input className="w-1/3 border-2 h-10 rounded-full" type="text" defaultValue="unit" ></input>
                        <input className="w-1/2 border-2 h-10 rounded-full" type="text" defaultValue="City" ></input>
                        <input className="w-1/2 border-2 h-10 rounded-full" type="text" defaultValue="postal code" ></input>
                        <input className="w-1/2 border-2 h-10 rounded-full" type="text" defaultValue="Province" ></input>
                        <input className="w-1/2 border-2 h-10 rounded-full" type="text" defaultValue="Country" ></input>
                        
                </form>
                <div className='flex'>
                    <Button label="Back" width="w-[161px]" bgColor="bg-gray20" textColor="text-gray60" />
                    <Button label="Next Step" width="w-[161px]" />
                </div>
        </div>
    );
}

export default DonationInfo;
