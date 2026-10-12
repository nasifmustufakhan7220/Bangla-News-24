import Header from "@/components/Header";
import HomeSection from "@/components/Home/HomeDesign";
import MarqueeText from "@/components/MarqueeText";


export default function Home() {
  return (
    <div>
      <Header />
      <MarqueeText/>

      <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="bg-red-500 p-4 lg:col-span-7">
            <HomeSection />
          </div>

          <div className="bg-blue-500 p-4 lg:col-span-4"></div>
        </div>
      </div>
    </div>
  );
}