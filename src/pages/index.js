import Header from "@/components/header";
import Footer from "@/components/footer";
import MainJumbotron from "@/components/jumbotron/MainJumbotron";
import testImage from "../../public/assets/images/test.jpg";
import testImage2 from "../../public/assets/images/test2.jpg";
import Cards from "@/components/cards";

export default function Home() {
  return (
    <div>
      <Header />
        <main className="flex min-h-screen flex-col items-center justify-between">
          <div className="w-full items-center justify-center text-sm lg:flex-cols">
          {/* Mount components here   */}
            <MainJumbotron title="Adopt, Don't Shop" description="Every adoption, every gift brings an animal closer to their best self. Become a hero - Save a life. Create a family." btnColor="bg-gray-700" image={testImage} imagePosition="right" />
            
            <br />

            <MainJumbotron title="The Lottery is back!" description="30 CASH prizes and bonus 50/50 pot up to $800,000.
            You can help local pets & win big!" btnColor="bg-gray-700" image={testImage2} imagePosition="left" />

            <Cards />
          </div>
      </main>
      <Footer />
    </div>
  )
}
