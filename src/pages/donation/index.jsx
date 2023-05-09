import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import Hero from "@/components/adoptionHero";


const index = () => {
  return (
    <div>
      <Header />
      {/* Mount your component here */}
      <div>
    <Hero title="Your Gift Can Save Many Lifes" desc="The BC SPCA offered life-saving work on behalf of animals in need and expanded its outreach services to help pet guardians who needed extra support to care for their animals."
      fontColor='text-white' titleSize="text-5xl" descSize="text-lg"
    />
  </div>
      <Footer />
    </div>
  );
};

export default index;
