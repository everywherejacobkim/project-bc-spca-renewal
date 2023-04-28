import Header from "@/components/header";
import Footer from "@/components/footer";
import MainJumbotron from "@/components/jumbotron/MainJumbotron";
import InfoJumbotron from "@/components/jumbotron/InfoJumbotron";
import mainHeroImage from "../../public/assets/svgs/main-hero.svg";
import secondHeroImage from "../../public/assets/svgs/second-hero.svg";
import testImage3 from "../../public/assets/images/test3.jpg";
import testImage4 from "../../public/assets/images/test4.jpg";
import testImage5 from "../../public/assets/images/test5.jpg";
import testImage6 from "../../public/assets/images/test6.jpg";
import ImageList from "@/components/list/ImageList";
import LocationSearchBar from "@/components/searchBar/LocationSearchBar";
import CardBox from "@/components/cardBox";
import SubscribeForm from "@/components/form/SubscribeForm";
import StoryCard from "@/components/storiesCards";



export default function Home() {

  const storiesData = [
    { title: 'Clementine', date: '2022-12-11', desc: 'Clementine is a British Shorthair. She was one of a litter of four kittens who were surrendered to us as a result of a cruelty investigation on July 16, 2022......', imgUrl: require("../../public/assets/images/test7.jpg") },
    { title: 'Pippy', date: '2022-12-11', desc: 'Clementine is a British Shorthair. She was one of a litter of four kittens who were surrendered to us as a result of a cruelty investigation on July 16, 2022......', imgUrl: require("../../public/assets/images/test7.jpg") },
  ]

  const cardData = [
    { title: 'Care for puppie', desc: 'Weve seen as increase in puppies comming through out doors in recent months', imgUrl: require("../../public/assets/icons/heart.png") },
    { title: 'Adopt A Kennel', desc: 'You can help provide for their care by purchasing a plaque on one of our animal spaces', imgUrl: require("../../public/assets/icons/house.png") },
    { title: 'Pet Food', desc: 'Pet food and supplies are needed at branches that have outreach programs.', imgUrl: require("../../public/assets/icons/paw.png") }
  ];

  const images = [
    testImage3,
    testImage4,
    testImage5,
  ]

  return (
    <div>
    <Header />
        <div className="w-full items-center justify-center text-center text-sm lg:flex-cols">
          {/*  Mount components here  */}
          <MainJumbotron title="Adopt, Don't Shop" description="Every adoption, every gift brings an animal closer to their best self. Become a hero - Save a life. Create a family." btnColor="bg-btn-primary" image={mainHeroImage} imagePosition="right" bgColor="bg-skyblue-jumbotron" fontColor="text-gray-30" btnText="Adopt Today" />
          <div className="my-24">
            <h1 className="text-5xl font-semibold">Together we make a difference</h1>
            <p className="mt-4 text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="my-8">
            <ImageList images={images} />
            <div className="my-8 mx-3 flex">
              <LocationSearchBar label="Find Volunteer Opportunities by Location" placeholder="Enter your postal code" />
            </div>
          </div>
          <InfoJumbotron title="BC SPCA Mission" description="The mission of the British Columbia Society for the Prevention of Cruelty to Animals (BC SPCA) is to protect and enhance the quality of life for domestic, farm and wild animals in British Columbia. We assist more than 118,679 animals in need every year and are funded by compassionate animal lovers who support our work and partner with us to protect and enhance the quality of life for domestic, farm and wild animals in B.C." image={testImage6} imagePosition="left" />
          <CardBox cardData={cardData} textSize='text-base' textColor='text-black' btnTextColor='text-black' bgColor='bg-white'/>
          <MainJumbotron title="The Lottery is back!" description="30 CASH prizes and bonus 50/50 pot up to $800,000.
          You can help local pets & win big!" btnColor="bg-gray-700" image={secondHeroImage} imagePosition="left" />
          <StoryCard storiesData={storiesData} textSize='text-base' textColor='text-black'  />
          <SubscribeForm title="Subscribe for BC SPCA Updates" description="Stay up to date on the news and events supporting animal welfare in B.C." placeholder="Email Address" />
      </div>
    <Footer />
  </div>
  )
}
