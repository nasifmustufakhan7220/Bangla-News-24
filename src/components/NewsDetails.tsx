import { INewsDetails } from "@/types/type";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${categoryId}`,
  );
  const data = await res.json();
  console.log("main data", data);
  const detailsPage:INewsDetails = data.data;

  if(!detailsPage){
    notFound()
  }

  console.log("data.data", detailsPage);
  return (
    <div className="flex flex-col justify-center mt-8">
      <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-snug text-neutral-900 sm:text-3xl">
        {detailsPage.title ? <>{detailsPage.title}</> :<></>}
      </h2>
      <p className="mx-auto max-w-3xl mt-3 text-lg text-neutral-600">
        {detailsPage.description.blocks[0].model.blocks[0].model.text}
      </p>
      <div className="flex w-full flex-col">
        {
          <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1 border-t border-b border-neutral-200 py-3 text-sm text-neutral-500 mb-8">
            <p>{detailsPage.byline[0]?.name}</p>
            <span>
              {detailsPage.firstPublished ? (
                <>
                  {new Date(detailsPage.firstPublished).toLocaleDateString(
                    "bn-BD",
                    { dateStyle: "full" },
                  )}
                </>
              ) : (
                <></>
              )}
            </span>
            <span>এ</span>
            <span>
              {detailsPage.firstPublished ? (
                <>
                  {new Date(detailsPage.firstPublished).toLocaleTimeString(
                    "bn-BD",
                    { hour: "numeric", minute: "2-digit", hour12: true },
                  )}
                </>
              ) : (
                <></>
              )}
            </span>
            <span>{detailsPage.wordCount}শব্দ</span>
          </div>
        }
      </div>

      <div>
        {detailsPage.body.map((t, i) => (
          <div key={i} className="max-w-3xl mx-auto">
            {t.type === "image" ? (
              <>
                <Image
                  src={t.url}
                  alt=""
                  width={800}
                  height={800}
                  className="rounded-xl"
                />{" "}
                <p className="mb-3 mt-1 text-sm text-neutral-500">
                  {t.caption && t.caption}
                </p>
              </>
            ) : (
              <>
                <h2 className="mt-8 mb-3 leading-relaxed text-neutral-800">
                  {t.type === "text" ? (
                    <p>{t.text}</p>
                  ) : (
                    <p className="mt-2 text-xl font-bold text-neutral-900">
                      {t.text}
                    </p>
                  )}
                </h2>
              </>
            )}
          </div>
        ))}
        <div className="max-w-3xl mx-auto mt-8 flex flex-wrap gap-2">
          {detailsPage.tags.map((tag, i) => (
            <div
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
              key={i}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
