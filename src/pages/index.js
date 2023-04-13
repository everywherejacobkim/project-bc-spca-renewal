import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
        <main className="flex min-h-screen flex-col items-center justify-between">
          <div className="w-full items-center justify-center text-sm lg:flex">
          {/* Mount components here   */}
            Add components 
          </div>
      </main>
      <Footer />
    </div>
  )
}
