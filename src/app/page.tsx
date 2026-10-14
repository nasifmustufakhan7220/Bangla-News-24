import HomeSection from "@/components/Home/HomeDesign";
import NewsSectionSkeleton from "@/components/Home/HomeSkeleton";
import MostRead from "@/components/Home/MostRead";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
     

      <Suspense fallback={<NewsSectionSkeleton />}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            {/* Main News Section */}
            <div className="min-w-0 lg:col-span-8">
              <HomeSection />
            </div>

            {/* Right Sidebar - More Width */}
            <aside className="min-w-0 lg:col-span-4">
              <MostRead />
            </aside>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
