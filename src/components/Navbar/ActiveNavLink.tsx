"use client";
import Link from "next/link";
import { ICategory } from "@/types/bangalNews.types";
import { usePathname } from "next/navigation";
const ActiveNavLink = ({ categories }: { categories: ICategory[] }) => {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-3 w-full mx-auto max-w-100">
        <Link className={` ${pathname === `/` && "text-red-500"} list-none cursor-pointer hover:text-red-500`} href={'/'}>হোম</Link>
      {categories
        .filter((category) => category.topicId)
        .map((c) => (
          <Link
            className={`${pathname === `/category/${c.slug}` && "text-red-500"}`}
            href={`/category/${c.slug}`}
            key={c.topicId}
          >
            <li className={`list-none cursor-pointer hover:text-red-500`}>
              {c.title}
            </li>
          </Link>
        ))}
    </div>
  );
};

export default ActiveNavLink;
