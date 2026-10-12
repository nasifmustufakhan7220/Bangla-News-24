import { IHeadLine } from "@/types/bangalNews.types";
import Image from "next/image";

const MainNews = ({ news }: { news: IHeadLine[] }) => {
  return (
    <>
      {news.slice(0, 1).map((n) => (
        <article
          key={n.id}
          className="h-full overflow-hidden rounded-xl border border-[#e2e2e2] bg-white"
        >
          {/* Image Section */}
          <div className="relative h-64 bg-[#f5f5f5] sm:h-70">
            <Image
              src={n.imageUrl}
              alt={n.imageAlt}
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              priority
              className="object-cover object-center"
            />
          </div>

          {/* News Content */}
          <div className="px-5 pb-5 pt-6">
            <p className="mb-2 text-sm text-red-600">
              {n.category}
            </p>

            <h2 className="mb-3 text-xl font-bold leading-[1.4] text-black sm:text-[25px]">
              {n.title}
            </h2>

            <p className="line-clamp-3 text-base leading-[1.55] text-[#777777] sm:text-[17px]">
              {n.description}
            </p>
          </div>
        </article>
      ))}
    </>
  );
};

export default MainNews;
