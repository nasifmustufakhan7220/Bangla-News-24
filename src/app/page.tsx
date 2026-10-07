import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import OtherNewsOfMainNews from "@/components/OtherNewsOfMainNews";

export default async function Home() {
   const res = await fetch("https://news-api-v2.vercel.app/api/news/sections", {
      next: { revalidate: 10 },
    });
    const data = await res.json();
    const [firstNews, ...otherNews] = data.data;

  return (
    <div>
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto mt-3">
        {/* left side 70 */}
        <div className="col-span-2">
            <MainNews news={firstNews.articles}/>

            <OtherNewsOfMainNews news={otherNews} />
        </div>

        {/* right side 30 */}
        <div className="col-span-1">
          <MostRead/>
        </div>
      </div>
    </div>
  );
}
