import { INewsDetails } from "@/types/bangalNews.types";
import Image from "next/image";

const getDetailsNews = async (articleId: string) => {
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${articleId}`,
  );
  return await res.json();
};

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) => {
  const { articleId } = await params;

  const data = await getDetailsNews(articleId);
  const details: INewsDetails = data.data;


// Idea of complex Breadcrumb (home > category > title)

//   const categories:ICategory[] = await getCategories();
//   console.log(categories);

//   const slug = categories.find(s=>{
//     return details.topics.some(d=>d.id === s.topicId)
//   });

//   console.log(slug);
// Idea of complex Breadcrumb (home > category > title)


  return (
    <div  className="mx-auto max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold leading-snug text-neutral-900 sm:text-3xl">
          {details.title}
        </h1>
        <p className="mt-3 text-lg text-neutral-600">
          {details.description.blocks.map((b) =>
            b.model.blocks.map((b) => b.model.text),
          )}
        </p>
        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 border-y border-neutral-200 py-3 text-sm text-neutral-500">
          <span>{details.byline.map((by) => by.name)}</span>
          <span>
            {details.firstPublished
              ? new Date(details.firstPublished).toLocaleDateString("bn-BD", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }) +
                " এ " +
                new Date(details.firstPublished).toLocaleTimeString("bn-BD", {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })
              : ""}
          </span>
          <span>{details.wordCount} শব্দ</span>
        </div>

        <div className="mt-6">
          <div className="flex flex-col gap-4">
            <div className="my-2">
              <div>
                {details.body.map((b, i) => (
                  <div key={i}>
                    {b.type === "image" ? (
                      <>
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-100">
                          <Image
                            src={b.url}
                            alt={b.type}
                            fill
                            sizes="(max-width: 768px) 100vw, 768px"
                            className="object-cover"
                          />
                        </div>
                        <p className="mt-2 text-sm text-neutral-500">
                          {b.caption} ({b.copyrightHolder})
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="leading-relaxed text-neutral-800 mt-5 mb-5">
                          {b.text}
                        </p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
