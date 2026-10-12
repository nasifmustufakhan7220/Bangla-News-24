
import { IHeadLine } from "@/types/bangalNews.types";
import React from "react";

const MainNewsLists = ({
  news,
}: {
  news: IHeadLine[];
}) => {
  const listNews = news.slice(1, 5);

  return (
    <div className="h-full overflow-hidden rounded-xl border border-[#e2e2e2] bg-white">
      {listNews.map((n, index) => (
        <article
          key={n.id}
          className={`px-4 py-5 ${
            index !== listNews.length - 1
              ? "border-b border-[#e2e2e2]"
              : ""
          }`}
        >
          <p className="mb-1 text-sm text-red-600">
            {n.category}
          </p>

          <h3 className="text-[17px] font-semibold leading-[1.45] text-black sm:text-[19px]">
            {n.title}
          </h3>
        </article>
      ))}
    </div>
  );
};

export default MainNewsLists;
