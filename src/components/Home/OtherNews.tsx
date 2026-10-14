import { INews } from "@/types/bangalNews.types";
import Link from "next/link";
import NewsCard from "../NewsCard";

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
            href={``}
            key={c.id}
            className="group min-w-0 overflow-hidden rounded-md border border-neutral-200 bg-white transition-shadow hover:shadow-md"
          >
            <NewsCard card={c} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OtherNews;
