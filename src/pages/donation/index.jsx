import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/adoptionHero";
import DonationBox from "@/components/donation/donationBox";
import DonationImage from "@/components/donation/donationImage/DonationImage";
import { useState } from 'react';
import DonationInfo from "@/components/donation/DonationInfo";
import PaymentInfo from "@/components/donation/PaymentInfo";


const Index = () => {

 
  // const [isComponentA, setIsComponentA] = useState(true);
  // const [isComponentB, setIsComponentB] = useState(false);

  // const handleComponentAClick = () => {
  //   setIsComponentA(false);
  //   setIsComponentB(true);
  // };
  // const handleComponentBClick = () => {
  //   setIsComponentB(false);
  // };
  const [componentStack, setComponentStack] = useState([]);
  const [currentComponent, setCurrentComponent] = useState('ComponentA');

  const handleComponentAClick = () => {
    setComponentStack([...componentStack, 'ComponentA']);
    setCurrentComponent('ComponentB');
  };

  const handleComponentBClick = () => {
    setComponentStack([...componentStack, 'ComponentB']);
    setCurrentComponent('ComponentC');
  };

  const handleBackButtonClick = () => {
    const previousComponent = componentStack.pop();
    setCurrentComponent(previousComponent);
    setComponentStack([...componentStack]);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case 'ComponentA':
        return <DonationBox onClick={handleComponentAClick} />;
      case 'ComponentB':
        return <DonationInfo onClick={handleComponentBClick} onButtonClick={handleBackButtonClick} />;
      case 'ComponentC':
        return <PaymentInfo componentStack={componentStack} setComponentStack={setComponentStack} onButtonClick={handleBackButtonClick} />
      default:
        return null;
    }
  };
  return (
    <div>
      <Header />
      {/* Mount your component here */}
      
    <Hero title="Your Gift Can Save Many Lifes" desc="The BC SPCA offered life-saving work on behalf of animals in need and expanded its outreach services to help pet guardians who needed extra support to care for their animals."
      fontColor='text-white' titleSize="text-5xl" descSize="text-lg"
    />
    <div className="flex gap-5 mx-[156px]">
      {renderComponent()}
           {/* {isComponentA ?(
      <DonationBox onClick={handleComponentAClick} />
     ): isComponentB ? (
        <DonationInfo onClick={handleComponentBClick} />
     ):(
      <PaymentInfo />
     )} */}
    {/* {component ? (
     <DonationBox  onClick={handleButtonClick}/>
       )  :(
        <DonationInfo onClick={handleButtonClick} /> 
      )
    } */}
      <DonationImage />
    </div>
      <Footer />
    </div>
  );
};

export default Index;
