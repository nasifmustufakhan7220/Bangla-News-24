import { IHeadLine } from "@/types/bangalNews.types";
import Link from "next/link";
import React from "react";

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  const news:IHeadLine[] = data.data;

  return <div className="rounded-lg border border-neutral-200 bg-white p-4">
    <h2 className="mb-3 text-lg font-bold text-neutral-900">সর্বাধিক পঠিত</h2>
    {
        news.map((n,i)=><div key={n.id} className="flex gap-1 p-2">
            <Link href={`/article/${n.id}`}>
              <p className="text-red-600 text-[16px]">{i+1}.</p>
              <p>{n.title}</p>
            </Link>
        </div>)
    }
  </div>;
};

export default MostRead;
