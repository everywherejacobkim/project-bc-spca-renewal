import Header from "@/components/header";
import Footer from "@/components/footer";
import MainJumbotron from "@/components/jumbotron/MainJumbotron";
import testImage from "../../public/assets/images/test.jpg";
import testImage2 from "../../public/assets/images/test2.jpg";
import testImage3 from "../../public/assets/images/test3.jpg";
import testImage4 from "../../public/assets/images/test4.jpg";
import testImage5 from "../../public/assets/images/test5.jpg";
import ImageList from "@/components/list/ImageList";
import LocationSearchBar from "@/components/searchBar/LocationSearchBar";
import CardBox from "@/components/cards/cardBox";


export default function Home() {

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
          <MainJumbotron title="Adopt, Don't Shop" description="Every adoption, every gift brings an animal closer to their best self. Become a hero - Save a life. Create a family." btnColor="bg-gray-700" image={testImage} imagePosition="right" />
          <div className="my-24">
            <h1 className="text-5xl font-semibold">Together we make a difference</h1>
            <p className="mt-4 text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="my-8">
            <ImageList images={images} />
            <div className="my-8 mx-3 flex">
              <LocationSearchBar label="Find Volunteer Opportunities by Location" placeholder="Enter your postal code"/>
            </div>
          </div>
          <CardBox />
          <MainJumbotron title="The Lottery is back!" description="30 CASH prizes and bonus 50/50 pot up to $800,000.
          You can help local pets & win big!" btnColor="bg-gray-700" image={testImage2} imagePosition="left" />
        </div>
    <Footer />
  </div>
  )
}
