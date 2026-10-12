import { IHeadLine } from '@/types/bangalNews.types';
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquee = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10", {cache:"force-cache"});
    const data = await res.json();
    const headLines:IHeadLine[] = data.data;
    return (
       <div className="bg-red-700 text-white mt-2 mb-5">

            <div className="flex max-w-7xl mx-auto">
                <div className="bg-red-800 py-1 px-5 font-bold">সর্বশেষ</div>

            <MarqueeText className="py-1" direction="right" duration={10}>
            
            {headLines.map(h => <div key={h.id}>
                <span>{h.title}</span>
                <span className="mx-5">•</span>
            </div>
            )}

            </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;