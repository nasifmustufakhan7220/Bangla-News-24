import { ICategory } from '@/types/bangalNews.types';
import { notFound } from 'next/navigation';
import ActiveNavLink from './ActiveNavLink';


const Navbar = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories", {cache:"force-cache"});
    if(!res.ok) notFound();
    const data = await res.json();
    const categories:ICategory[] = data.data;
    return (
        <div className='flex items-center gap-3 w-full mx-auto max-w-100'>
            
            <ActiveNavLink categories={categories}/>
        </div>
    );
};

export default Navbar;