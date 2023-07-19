import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/adoptionHero";
import DonationBox from "@/components/donation/donationBox";
import DonationImage from "@/components/donation/donationImage/DonationImage";
import { useState } from "react";
import DonationInfo from "@/components/donation/DonationInfo";
import { checkout } from "../../../checkout";

const Index = () => {
  const [componentStack, setComponentStack] = useState([]);
  const [currentComponent, setCurrentComponent] = useState("ComponentA");

  const handleComponentAClick = () => {
    setComponentStack([...componentStack, "ComponentA"]);
    setCurrentComponent("ComponentB");
  };

  const handleBackButtonClick = () => {
    const previousComponent = componentStack.pop();
    setCurrentComponent(previousComponent);
    setComponentStack([...componentStack]);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case "ComponentA":
        return <DonationBox onClick={handleComponentAClick} />;
      case "ComponentB":
        return (
          <DonationInfo
            onClick={() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1NOBpoJUzbGisoG64CV63j58",
                    quantity: 1,
                  },
                ],
              });
            }}
            onButtonClick={handleBackButtonClick}
          />
        );
    }
  };
  return (
    <div>
      <Header />
      <Hero
        title="Your Gift Can Save Many Lifes"
        desc="The BC SPCA offered life-saving work on behalf of animals in need and expanded its outreach services to help pet guardians who needed extra support to care for their animals."
        fontColor="text-white"
      />
      <div className=" flex-col mx-0 md:flex md:flex-row md:gap-3 md:mx-10 lg:flex lg:flex-row lg:gap-5 lg:mx-[156px]">
        {renderComponent()}
        <DonationImage />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
