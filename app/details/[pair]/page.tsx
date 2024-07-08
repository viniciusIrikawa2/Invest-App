'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const Details = () => {
    const params = useParams();

    return (
        <div className='p-8 uppercase bg-[#2f2f2f]'>
            <h1 className='text-white'> Details of <span className='text-green-400 font-bold'> {params.pair} </span> </h1>
        </div>
    )
}

export default Details;