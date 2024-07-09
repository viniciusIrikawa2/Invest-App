'use client';
import React, { useContext } from 'react';
import { AppContext } from '../context/InvestmentContext';

const WalletPage = () => {
    const { formData } = useContext(AppContext);
    
    return (
        <div>
            <h1 className='mt-14 ml-10 text-in-white text-xl uppercase font-bold'> My Wallet </h1>
        </div>
    )
}

export default WalletPage;