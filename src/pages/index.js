import Header from "@/components/header";
import Footer from "@/components/footer";
import Cards from "@/components/cards";

export default function Home() {
  return (
    <div>
      <Header />
        <main className="flex min-h-screen flex-col items-center justify-between">
          <div className="w-full items-center justify-center text-sm lg:flex">
          {/* Mount components here   */}
            <Cards />
          </div>
      </main>
      <Footer />
    </div>
  )
}
