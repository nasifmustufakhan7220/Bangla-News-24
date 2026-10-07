import { IMostRead } from "@/types/type";
import Link from "next/link";

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  const mostRNews: IMostRead[] = data.data;
  return (
    <div className="bg-[#ffffffb2] rounded-2xl shadow-2xl p-6">
      <h2 className="text-2xl font-semibold mb-2">সর্বাধিক পঠিত</h2>
      {mostRNews.map((most, i) => (
        <Link href={`/article/${most.id}`} key={most.id}>
          <div className="flex gap-3" >
            <p className="text-red-500 text-xl font-bold">{i + 1}</p>
            <p className="text-[18px] font-semibold cursor-pointer hover:text-red-500">
              {most.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MostRead;
