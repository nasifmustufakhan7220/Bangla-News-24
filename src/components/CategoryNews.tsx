import React from "react";
import NewsCardOfOtherNews from "./NewsCardOfOtherNews";
import { INewsCard } from "@/types/type";

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
  console.log(categoryNews);
  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold border-b-2 border-b-red-700 mb-5">{data.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categoryNews.map((category) => (
          <NewsCardOfOtherNews key={category.id} newsCard={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
