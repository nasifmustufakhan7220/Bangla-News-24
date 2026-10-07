import { IMainNew } from "@/types/type";
import Image from "next/image";

const MainNews = ({ news }: { news: IMainNew[] }) => {

  return (
    <div>
      <div className="md:flex gap-3">
        {/* first news */}

        <div className="card bg-base-100  shadow-sm mb-3">
          <figure>
            <Image
              width={600}
              height={600}
              src={news[0].imageUrl}
              alt={news[0].imageAlt}
            />
          </figure>
          <div className="card-body">
            <p className="font-bold text-red-500">{news[0].category}</p>
            <h2 className="card-title">{news[0].title}</h2>
            <p>{news[0].description}</p>

            <p>
              {news[0].firstPublished ? (
                <>
                  {new Date(news[0].firstPublished).toLocaleDateString(
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

        {/* list news */}
        <div>
          {news.slice(0,4).map((list) => (
            <div key={list.id} className="grid grid-cols-1 gap-4">
              <div className="rounded-lg border border-gray-300 p-4">
                <p className="mb-2 text-sm font-semibold text-red-600">
                 {list.category}
                </p>

                <h2 className="text-xl font-semibold">
                  {list.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MainNews;
