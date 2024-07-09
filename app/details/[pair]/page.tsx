'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const DetailsPage = () => {
    const params = useParams();

    return (
        <div>
            <h1 className='text-white'>Details page</h1>
            <span className='text-white'> Selected Pair: {params.pair}</span>
        </div>
    )
}

export default DetailsPage;