import React from 'react';
import Button from '../common/button';


const PaymentInfo = ({componentStack, setComponentStack, onButtonClick }) => {
    return (
        <div  className='border-2 w-2/3 flex flex-col rounded-[30px] drop-shadow-lg my-32 mx-auto px-12'>
           
                <div className='mb-14 my-14'>
                    <h3 className='text-left text-2xl font-semibold'>Payment Infomation</h3>
                </div>  
                <div className='flex gap-5 mx-auto' >
                    <Button label='Credit card' width="w-72"  />
                    <Button label='Paypal' width="w-72"  bgColor='bg-gray40' textColor='text-gray60' />
                </div>
                <form className='gap-3 mx-autow-full '> 
                        <input className="block w-full border-2 h-10 rounded-full pl-5 mb-6" type="text" defaultValue="card number" ></input>
                        <div className='flex gap-5 mx-auto mb-6'>
                            <input className="w-72 border-2 h-10 rounded-full pl-5" type="text" defaultValue="expiry(MM/YY)" ></input>
                            <input className="w-72 border-2 h-10 rounded-full pl-5" type="text" defaultValue="CVV" ></input>
                        </div>
                </form>
                <div className='border-2 w-full mb-6'></div>
                <div className='flex justify-between'>
                    <h5 className='text-lg'>Total Amount</h5>
                    <h5 className='text-lg'>$100</h5>
                </div>
                <div className='flex justify-center gap-24 px-12 py-14'>
                       
                        <Button label="Back" width="w-[161px]" bgColor="bg-gray20" textColor="text-gray60" onClick={onButtonClick}/>
                        
                    
                    <Button label="Donate" width="w-[161px]"  />
                </div>
        </div>
    );
}

export default PaymentInfo;
