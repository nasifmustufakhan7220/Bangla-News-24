import { IMarquee } from "@/types/type";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=20", {
    next: { revalidate: 60 },
  });

  const data = await res.json();
  const marquees: IMarquee[] = data.data;

  return (
    <div className="bg-red-700 text-white mt-3">
      <div className="flex max-w-7xl mx-auto">
        <div className="bg-red-900 py-1 px-5 font-bold text-xl pt-2">
          সর্বশেষ
        </div>

        <MarqueeText
          className="py-2"
          direction="right"
          duration={11}
          pauseOnHover={true}
        >
          {marquees.map((marquee) => (
            <Link className="hover:underline" href={`/article/${marquee.id}`} key={marquee.id}>
              <div >
                <div className="flex">
                  {marquee.title} <p className="mx-5">•</p>
                </div>
              </div>
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
