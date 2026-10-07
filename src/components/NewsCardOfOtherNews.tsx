import { INewsCard } from '@/types/type';
import Image from 'next/image';
import React from 'react';

const NewsCardOfOtherNews = ({newsCard}:{newsCard:INewsCard}) => {
    const truncateText = (text: string, maxLength:number)=>{
        if(text.length <= maxLength){
            return text + "...";
        }

        const truncated = text.slice(0, maxLength);

        return truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
    }
    return (
      <div>
        <div className="card bg-base-100 shadow-sm cursor-pointer h-full">
          <figure className="">
            <Image
              width={600}
              height={600}
              src={newsCard.imageUrl}
              alt={newsCard.imageAlt}
            />
          </figure>
          <div className="card-body">
            <p className="text-sm font-bold text-red-500">
              {newsCard.category}
            </p>
            <h2 className="card-title hover:text-red-500">{newsCard.title}</h2>
            <p className="text-zinc-500">
              {truncateText(newsCard.description, 120)}
            </p>
            <p className="text-[14px]">
              {newsCard.firstPublished ? (
                <>
                  {new Date(newsCard.firstPublished).toLocaleDateString(
                    "bn-BD",
                    { dateStyle: "full" },
                  )}
                </>
              ) : (
                <></>
              )}
            </p>
          </div>
        </div>
      </div>
    );
};

export default NewsCardOfOtherNews;