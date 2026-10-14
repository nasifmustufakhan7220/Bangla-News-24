import { ICategory } from '@/types/bangalNews.types';
import Link from 'next/link';


const Navbar = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories", {cache:"force-cache"});
    const data = await res.json();
    const categories:ICategory[] = data.data;
    return (
        <div className='flex items-center gap-3 w-full mx-auto max-w-100'>
            <Link className='list-none cursor-pointer hover:text-red-500' href={'/'}>হোম</Link>
            {
                categories.filter(category=>category.topicId).map(c=> <Link href={`/category/${c.slug}`} key={c.topicId}>
                    <li className='list-none cursor-pointer hover:text-red-500'>{c.title}</li>
                </Link>)
            }
        </div>
    );
};

export default Navbar;