import Header from "@/components/header";
import Footer from "@/components/footer";
import MainJumbotron from "@/components/jumbotron/MainJumbotron";
import InfoJumbotron from "@/components/jumbotron/InfoJumbotron";
import mainHeroImage from "../../public/assets/svgs/main-hero.svg";
import secondHeroImage from "../../public/assets/svgs/second-hero.svg";
import adoptImage from "../../public/assets/svgs/image-adopt-a-pet.svg";
import volunteerImage from "../../public/assets/svgs/image-volunteer.svg";
import donateImage from "../../public/assets/svgs/image-donate.svg";
import ImageList from "@/components/list/ImageList";
import LocationSearchBar from "@/components/searchBar/LocationSearchBar";
import CardBox from "@/components/cardBox";
import SubscribeForm from "@/components/form/SubscribeForm";
import StoryCard from "@/components/storiesCards";

export default function Home() {
  const storiesData = [
    {
      title: "Clementine",
      date: "December 11, 2022",
      desc: "Clementine is a British Shorthair. She was one of a litter of four kittens who were surrendered to us as a result of a cruelty investigation on July 16, 2022......",
      imgUrl: require("../../public/assets/images/adoption-stories-image.png"),
    },
    {
      title: "Maxwell",
      date: "March 13, 2023",
      desc: "When Maxwell was found as a stray and brought into the BC SPCA Williams Lake Community Animal Centre, he was in rough shape. After receiving the ......",
      imgUrl: require("../../public/assets/images/adoption-stories-image2.png"),
    },
  ];

  const cardData = [
    {
      title: "Care for puppie",
      desc: "Weve seen as increase in puppies comming through out doors in recent months",
      imgUrl: require("../../public/assets/icons/heart.png"),
      btn: "Help puppy",
    },
    {
      title: "Adopt A Kennel",
      desc: "You can help provide for their care by purchasing a plaque on one of our animal spaces",
      imgUrl: require("../../public/assets/icons/house.png"),
      btn: "Adopt now",
    },
    {
      title: "Pet Food",
      desc: "Pet food and supplies are needed at branches that have outreach programs.",
      imgUrl: require("../../public/assets/icons/paw.png"),
      btn: "Donate food",
    },
  ];

  const menuImages = [
    {
      title: "Adopt a pet",
      link: "/search-map",
      image: adoptImage,
    },
    {
      title: "Volunteer",
      link: "/search-map",
      image: volunteerImage,
    },
    {
      title: "Donate",
      link: "/donation",
      image: donateImage,
    },
  ];

  return (
    <div>
      <Header />
      <div className="w-full items-center justify-center text-center text-sm lg:flex-cols">
        {/*  Mount components here  */}
        <div className="">
          <MainJumbotron
            title="Adopt, Don't Shop"
            description="Every adoption, every gift brings an animal closer to their best self. Become a hero - Save a life. Create a family."
            btnColor="bg-btn-primary"
            image={mainHeroImage}
            imagePosition="right"
            bgColor="bg-light-blue"
            fontColor="text-gray-30"
            btnText="Adopt Today"
            btnLink="/search-map"
          />
        </div>
        <div className="mt-16 md:mt-24 mb-12">
          <h1 className="text-3xl md:text-5xl font-semibold mx-14 md:mx-2">
            Together we make a difference
          </h1>
          <p className="mt-4 text-base mx-12 md:mx-2">
            Ready to make a positive difference in your community?
          </p>
        </div>
        <div className="my-8">
          <ImageList images={menuImages} />
          <div className="md:-mx-4 lg:mx-56 my-8">
            <LocationSearchBar
              label="Find Volunteer Opportunities by Location"
              placeholder="Enter your location"
              width="w-2/3"
            />
          </div>
        </div>
        <InfoJumbotron
          title="BC SPCA Mission"
          description="The mission of the British Columbia Society for the Prevention of Cruelty to Animals (BC SPCA) is to protect and enhance the quality of life for domestic, farm and wild animals in British Columbia. We assist more than 118,679 animals in need every year and are funded by compassionate animal lovers who support our work and partner with us to protect and enhance the quality of life for domestic, farm and wild animals in B.C."
        />
        <CardBox
          cardData={cardData}
          textSize="text-base"
          textColor="text-black"
          btnTextColor="text-black"
          bgColor="bg-white"
          cardBgColor="bg-gray-20"
        />
        <MainJumbotron
          title="The Lottery is back!"
          description="30 CASH prizes and bonus 50/50 pot up to $800,000.
          You can help local pets & win big!"
          image={secondHeroImage}
          imagePosition="left"
          bgColor="bg-light-yellow"
          btnText="Buy Tickets Now"
          btnColor="bg-primary"
        />
        <StoryCard
          storiesData={storiesData}
          textSize="text-base"
          textColor="text-black"
          cardBgColor="bg-gray20"
        />
        <SubscribeForm
          title="Subscribe for BC SPCA Updates"
          description="Stay up to date on the news and events supporting animal welfare in B.C."
          placeholder="Email Address"
        />
      </div>
      <Footer />
    </div>
  );
}
