import React from "react";
import NewsCardOfOtherNews from "./NewsCardOfOtherNews";
import { INewsCard } from "@/types/type";
import Link from "next/link";

const CategoryNews = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
    { next: { revalidate: 60 } },
  );
  const data = await res.json();
  const categoryNews:INewsCard[] = data.data;

  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold border-b-2 border-b-red-700 mb-5">{data.title}</h2>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categoryNews.map((category) => (
            <Link key={category.id} href={`/article/${category.id}`}>
          <NewsCardOfOtherNews  newsCard={category} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
