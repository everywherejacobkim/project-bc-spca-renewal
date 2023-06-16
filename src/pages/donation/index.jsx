import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import Hero from "@/components/adoptionHero";
import DonationBox from "@/components/donationBox";
import DonationImage from "@/components/donationImage";



const index = () => {
  const questions = [
    {question:"Do you want to make this a montly gift?" },
    {question:"Who is making this donation?"},
    {question:"Slect your amount"},
    {question:"Are you making this gift in honour of someone?"}
  ]
  return (
    <div>
      <Header />
      {/* Mount your component here */}
      
    <Hero title="Your Gift Can Save Many Lifes" desc="The BC SPCA offered life-saving work on behalf of animals in need and expanded its outreach services to help pet guardians who needed extra support to care for their animals."
      fontColor='text-white' titleSize="text-5xl" descSize="text-lg"
    />
    <div className="flex gap-5 mx-[156px]">
      <DonationBox questions={questions} />
      <DonationImage />
    </div>
      <Footer />
    </div>
  );
};

export default index;
