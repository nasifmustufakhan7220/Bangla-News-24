
import React from "react";
import MainNews from "./MainNews";
import { INews } from "@/types/bangalNews.types";
import MainNewsLists from "./MainNewsLists";

const HomeSection = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections",
    {
      next: { revalidate: 60 },
    }
  );

  const data = await res.json();
  const news: INews[] = data.data;
  const [mainNews, ...otherNews] = news;

  return (
    <div className="min-w-0">
      {/* Main News + News Lists */}
      <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
        {/* Main News */}
        <div className="min-w-0">
          <MainNews news={mainNews.articles} />
        </div>

        {/* Main News Lists */}
        <div className="min-w-0">
          <MainNewsLists news={mainNews.articles} />
        </div>
      </div>

      {/* Other news of home page */}
      <div>{otherNews.length}</div>
    </div>
  );
};

export default HomeSection;

