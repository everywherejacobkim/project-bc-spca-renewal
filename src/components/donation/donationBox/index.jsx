import Button from '@/components/common/button';
import React from 'react';
import DonationInfo from '../DonationInfo';
import PaymentInfo from '../PaymentInfo';
import { useState } from 'react';
const DonationBox = (props) => {

    const [button1Disabled, setButton1Disabled] = useState(false);
    const [button2Disabled, setButton2Disabled] = useState(false);
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState("");


    const handleButton1Click = (e) => {
    // setButton1Disabled(true);
    // setButton2Disabled(false);
     setSelected("Donate one time")
     setActive(!active)

   
  };
  console.log(selected)
    

    const handleButton2Click = () => {
    // setButton1Disabled(false);
    // setButton2Disabled(true);
    setSelected("Donation Montly")
    setActive(!active)
    
    // setBgColorChange("bg-primary");
    // setFontColorChange("text-white")
  };

    return (

        <div className='border-2 md:w-2/3 flex flex-col  rounded-[30px] shadow-lg md:my-32 md:mx-auto md:px-12 sm:w-full sm:my-14'>

            {/*question props*/}
            <div className='mx-auto my-14 '>
                <h3 className='text-left text-2xl font-semibold mb-10'>Donation Detail</h3>
                <p>Do you want to make this a montly gift?</p>
                <div className='grid grid-cols-2 gap-5 mt-4 mb-8' >
                    <Button onClick={handleButton1Click} selected={selected} setSelected={setSelected} label='Donate one time' hoverBg="hover:bg-primary-light hover:text-white" bgColor="bg-gray-40" width="w-full" textColor="text-gray-60"  active={active} setActive={setActive} />
                    <Button onClick={handleButton2Click} selected={selected} setSelected={setSelected} label='Donate Montly'   hoverBg="hover:bg-primary-light hover:text-white"  bgColor="bg-gray-40" width="w-full" textColor="text-gray-60" active={active} setActive={setActive}/>
                </div>
                <p className='text-left mb-4'>Who is making this donation?</p>
                <div className='grid grid-cols-2 gap-5 mt-4 mb-8' >
                    <Button onClick={handleButton1Click} button1Disabled={button1Disabled} label='Individual' textColor='text-gray-60' width="w-full"  bgColor='bg-gray-40'   />
                    <Button onClick={handleButton2Click} button2Disabled={button2Disabled} label='Organization' textColor='text-gray-60' width="w-full"   bgColor='bg-gray-40'  />
                </div>
                <p>Select your amount</p>
                <div className='grid grid-cols-2 gap-5  mt-4 mb-8'>
                    <select className='pl-2 border-2 w-full h-10 rounded-full text-gray-60'>
                        <option default disabled>Select amount</option>
                        <option value="50">$50</option>
                        <option value="100">$100</option>
                        <option value="150">$150</option>
                    </select>
                    <form className='border-2 w-full h-10 rounded-full text-gray-80' >
                      
                        <input className="ml-5 mt-2 leading-3" type="number" placeholder="$Other"  />
                     
                    </form>
                </div>
                <div>
                    <p>Are you making this git in honour of someone?</p>
                        <select className='pl-2 border-2 w-full h-10 rounded-full mt-4 mb-2  text-gray-80'>
                            <option default>In Honour</option>
                        </select>
                        <form className='grid grid-cols-2 gap-5 text-gray-80'>
                            <input className="border-2 w-full h-10 rounded-full first-line:ml-5 mt-2 leading-3 pl-2" type="text" placeholder="first name"  />                            
                            <input className="border-2 w-full  h-10 rounded-full mt-2 leading-3 pl-2" type="text" placeholder="last name"  />
                            
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
