import Image from "next/image";
import classNames from "classnames";
import dogImage from '../../../public/assets/images/Group 31.png'
import arrowIcon from  '../../../public/assets/icons/right-arrow.png'
import Link from "next/link";
import Button from "../common/button";

const CardBox = ({
  cardData,
  cardBgColor,
  textSize,
  textColor,
  btnTextColor,
  bgColor,
}) => {

  
  return (
    <div className='mx-auto sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 py-8'>
      <div className="flex flex-row flex-wrap justify-center">
        <Image
          src={dogImage}
          alt='dog image'
        />
      </div>
      <h2 className='text-4xl text-center pb-8 font-bold'>How you can give to animals</h2>
      <div className="flex flex-row flex-wrap justify-center gap-6  mx-2 ">
        {cardData.map((data, index) => (
          <div key={index} className={classNames(
            'border-2 p-5 rounded-3xl w-full md:w-1/2 lg:w-1/3 xl:w-1/4 hover:bg-light-blue',
            cardBgColor 
            )}>
             
            <div className={
              classNames(
                "flex justify-start",
                
              )
            }>
              <div className="w-23">
               <Image
                  src={data.imgUrl}
                  alt='icon'
                  width={23}
                  height={23}
                  layout={"cover"}               
                />
              </div>
              <h3 className={classNames(
                'pl-4 leading-9',
                textSize='text-xl')}>
                 {data.title}
                
              </h3>               
            </div>
            <p className='h-24 pt-5 text-left'>{data.desc}</p>
            <div className={classNames(
            'flex flex-row justify-start',
            )}>
              <Button bgColor="bg-primary" textColor="text-white" hoverBg="hover:bg-primary-light" label={data.btn}/>
            </div>
          </div>
        ))} 
      </div>
    </div>
  )
}

export default CardBox;

