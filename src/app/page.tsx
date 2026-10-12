import Header from "@/components/Header";
import HomeSection from "@/components/Home/HomeDesign";
import NewsSectionSkeleton from "@/components/Home/HomeSkeleton";
import MostRead from "@/components/Home/MostRead";
import MarqueeText from "@/components/MarqueeText";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <MarqueeText />

      <Suspense fallback={<NewsSectionSkeleton/>}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            {/* Main News Section */}
            <div className="min-w-0 lg:col-span-9">
              <HomeSection />
            </div>

            {/* Right Sidebar */}
            <aside className="lg:col-span-3">
              <MostRead />
            </aside>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
