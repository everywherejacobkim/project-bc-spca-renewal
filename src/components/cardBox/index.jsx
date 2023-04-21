import Image from "next/image";
import classNames from "classnames";


function CardBtn() {
  return (
    <div className="flex flex-row justify-start">
      <button className='py-2 rounded-full border-2 w-24 text-center'>Button</button>
    </div>
  )
}

const CardBox = ({
  cardData,
  textSize,
  textColor,
  btnTextColor,
  bgColor,
}) => {

  
  return (
    <div className='mx-auto sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 py-8'>
      <h2 className='text-2xl text-center pb-8'>How you can give to animals</h2>
      <div className="flex flex-row flex-wrap justify-center gap-6  mx-2 ">
        {cardData.map((data, index) => (
          <div key={index} className={classNames(
            'border-2 p-5 rounded w-full md:w-1/2 lg:w-1/3 xl:w-1/4',
            bgColor || 'bg-blue'
          )}>
            <div className="flex justify-start">
              {/** need to fix icon size*/}
              <Image
                src={data.imgUrl}
                alt='icon'
                width={20}
              />

              <h3 className={classNames(
                'pl-4',
                textSize='text-xl')}>{data.title}</h3>
            </div>
            <p className='py-6'>{data.desc}</p>
            <CardBtn />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardBox;

