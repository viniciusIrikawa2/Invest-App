'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const Details = () => {
    const params = useParams();

    return (
        <main>
            <div className='p-8 uppercase bg-[#2f2f2f] border-l-4 border-green-400'>
                <h1 className='text-[#e4e4e4]'> Details of <span className='text-green-400 font-bold'> {params.pair} </span> </h1>
            </div>
        </main>
    )
}

export default Details;