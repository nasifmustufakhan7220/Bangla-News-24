
import { INavlink } from "@/types/type";
import Link from "next/link";

const NavLinks = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories", {
      cache: "force-cache",
    });
    const data = await res.json();
    const navs:INavlink[] = data.data;
    const filteredNavLinks = navs.filter((nav) => nav.scrapable);

    return (
      <div className="flex gap-3 justify-center">
        <Link href={"/"}>হোম</Link>
        {filteredNavLinks.map((n, i) => (
          <Link key={i} href={`/category/${n.slug}`}>
            {n.title}
          </Link>
        ))}
      </div>
    );
};

export default NavLinks;