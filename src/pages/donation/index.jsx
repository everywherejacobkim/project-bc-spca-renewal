import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/adoptionHero";
import DonationBox from "@/components/donation/donationBox";
import DonationImage from "@/components/donation/donationImage/DonationImage";
import { useState } from 'react';
import DonationInfo from "@/components/donation/DonationInfo";


const Index = () => {

  const questions = [
    {question:"Do you want to make this a montly gift?" },
    {question:"Who is making this donation?"},
    {question:"Slect your amount"},
    {question:"Are you making this gift in honour of someone?"}
  ]

  const [component, setComponent] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setComponent(false);
  };
  
  return (
    <div>
      <Header />
      {/* Mount your component here */}
      
    <Hero title="Your Gift Can Save Many Lifes" desc="The BC SPCA offered life-saving work on behalf of animals in need and expanded its outreach services to help pet guardians who needed extra support to care for their animals."
      fontColor='text-white' titleSize="text-5xl" descSize="text-lg"
    />
    <div className="flex gap-5 mx-[156px]">
    {component ? (
     <DonationBox  onClick={handleButtonClick}/>
       )  :(
        <DonationInfo /> 
      )
    }
      <DonationImage />
    </div>
      <Footer />
    </div>
  );
};

export default Index;
