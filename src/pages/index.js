import Header from "@/components/header";
import Footer from "@/components/footer";
import MainJumbotron from "@/components/jumbotron/MainJumbotron";
import testImage from "../../public/assets/images/test.jpg";

export default function Home() {
  return (
    <div>
      <Header />
        <main className="flex min-h-screen flex-col items-center justify-between">
          <div className="w-full items-center justify-center text-sm lg:flex">
          {/* Mount components here   */}
            <MainJumbotron title="Adopt, Don't Shop" description="Every adoption, every gift brings an animal closer to their best self. Become a hero - Save a life. Create a family." btnColor="bg-gray-700" image={testImage} imagePosition="right" />
          </div>
      </main>
      <Footer />
    </div>
  )
}
