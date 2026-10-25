import { IHeadLine } from "@/types/bangalNews.types";
import Image from "next/image";
import React from "react";

const NewsCard = ({ card }:{card:IHeadLine}) => {
  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
        <Image
          src={card.imageUrl}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-2">
        <span className="text-[10px] font-medium text-red-700">
          {card.category}
        </span>

        <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-neutral-900 group-hover:text-red-700">
          {card.title}
        </h3>

        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-neutral-600">
          {card.description}
        </p>

        <p className="mt-2 text-[10px] text-neutral-400">
          {card.firstPublished &&
            new Date(card.firstPublished).toLocaleDateString("bn-BD", {
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "Asia/Dhaka",
            }) +
              " এ " +
              new Date(card.firstPublished).toLocaleTimeString("bn-BD", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
                timeZone: "Asia/Dhaka",
              })}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
