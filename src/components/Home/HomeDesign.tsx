import React from 'react';

const HomeSection = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/sections", {next: {revalidate: 60}});
    const data = await res.json();
    const news = data.data;
    console.log(news);
    return (
        <div className='flex items-center gap-3'>
            {/* Main News */}
            <div>
                
            </div>
            
            {/* Main News lists */}
            <div></div>
        </div>
    );
};

export default HomeSection;