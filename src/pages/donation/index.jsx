import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/adoptionHero";
import DonationBox from "@/components/donation/donationBox";
import DonationImage from "@/components/donation/donationImage/DonationImage";
import { useState } from 'react';
import DonationInfo from "@/components/donation/DonationInfo";
import PaymentInfo from "@/components/donation/PaymentInfo";
import { checkout } from "../../../checkout"

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

  // const handleComponentBClick = () => {
  //   setComponentStack([...componentStack, 'ComponentB']);
  //   setCurrentComponent('ComponentC');
  // };

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
        return <DonationInfo onClick={(()=>{
            checkout({
              lineItems:[
                {
                  price:"price_1NOBpoJUzbGisoG64CV63j58",
                  quantity:1
                }
              ]
            })
         } )} onButtonClick={handleBackButtonClick} />;
      // case 'ComponentC':
       
      // return 
      // default:
      //   return null;
    }
  };
  return (
    <div>
      <Header />
      {/* Mount your component here */}
      
    <Hero title="Your Gift Can Save Many Lifes" desc="The BC SPCA offered life-saving work on behalf of animals in need and expanded its outreach services to help pet guardians who needed extra support to care for their animals."
      fontColor='text-white'
    />
    <div className="lg:flex lg:flex-row lg:gap-5 lg:mx-[156px] sm:flex-col sm:mx-0">
      {renderComponent()}
          
      <DonationImage />
    </div>
      <Footer />
    </div>
  );
};

export default Index;
