import { IHeadLine } from "@/types/bangalNews.types";
import NewsCard from "./NewsCard";
import Link from "next/link";
import { notFound } from "next/navigation";

const getCetagory = async (categorySlug: string) => {
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categorySlug}`,
    { next: { revalidate: 60 } },
  );
  if(!res.ok) notFound();
  return await res.json();
};
const CategoryProducts = async ({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) => {
  const { categorySlug } = await params;
  const categories = await getCetagory(categorySlug);
  const categoriesData: IHeadLine[] = categories.data;
  return (
    <div className="mx-auto max-w-300">
      <h2 className="mb-2 border-b-2 border-red-700 pb-2 text-lg font-bold text-neutral-900">
        {categories.title}
      </h2>

      <div className="flex gap-2 items-center mb-3 mt-3">
        <p className="text-[14px] hover:text-red-500">
          <Link href={`/`}>হোম</Link>
        </p>
        <h3 className="text-[20px]">›</h3>
        <p className="text-[14px]">{categories.title}</p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categoriesData.map((c) => (
          <div
            key={c.id}
            className="group min-w-0 overflow-hidden rounded-md border border-neutral-200 bg-white transition-shadow hover:shadow-md cursor-pointer"
          >
            <Link href={`/article/${c.id}`}>
            <NewsCard card={c} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
