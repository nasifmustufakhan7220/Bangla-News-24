
import { INews } from "@/types/bangalNews.types";
import Image from "next/image";
import Link from "next/link";

const OtherNews = ({ card }: { card: INews }) => {
  return (
    <section className="min-w-0">
      {/* Category heading */}
      <h2 className="mb-2 border-b-2 border-red-700 pb-2 text-lg font-bold text-neutral-900">
        {card.title}
      </h2>

      {/* News grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {card.articles.map((c) => (
          <Link
            href={c.link || "#"}
            key={c.id}
            className="group min-w-0 overflow-hidden rounded-md border border-neutral-200 bg-white transition-shadow hover:shadow-md"
          >
            {/* Image */}
            <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
              <Image
                src={c.imageUrl}
                alt={c.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-2">
              <span className="text-[10px] font-medium text-red-700">
                {c.category}
              </span>

              <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-neutral-900 group-hover:text-red-700">
                {c.title}
              </h3>

              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-neutral-600">
                {c.description}
              </p>

              <p className="mt-2 text-[10px] text-neutral-400">
                {c.firstPublished &&
                  new Date(c.firstPublished).toLocaleDateString("bn-BD", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    timeZone: "Asia/Dhaka",
                  }) +
                    " এ " +
                    new Date(c.firstPublished).toLocaleTimeString("bn-BD", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                      timeZone: "Asia/Dhaka",
                    })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OtherNews;
