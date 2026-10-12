import { HindSiliguri } from '@/app/layout';
import { connection } from 'next/server';
import React from 'react';

const DisplayTime = async() => {
    await connection();

    const date = new Date().toLocaleDateString("bn-BD",{dateStyle:"full"});
    return (
        <div className={`${HindSiliguri.className} text-[#535353]`}>
            {date}
        </div>
    );
};

export default DisplayTime;