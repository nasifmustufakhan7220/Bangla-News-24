import { IHeadLine } from "@/types/bangalNews.types";
import React from "react";

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  const news = data.data;
  const mostNews:IHeadLine[] = news[0].articles;

  return <div className="rounded-xl border border-[#e2e2e2] bg-white">
    {
        mostNews.map((n,i)=><div key={n.id} className="flex gap-2 p-5 ">
            <p className="text-red-600 text-[20px]">{i+1}.</p>
            <p>{n.title}</p>
        </div>)
    }
  </div>;
};

export default MostRead;
