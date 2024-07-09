'use client';
import React, { useContext } from 'react';
import Table from '../components/Table';

const WalletPage = () => {

    return (
        <div>
            <h1 className='mt-14 ml-10 text-in-white text-xl uppercase font-bold'> My Wallet </h1>
            <Table/>
        </div>
    )
}

export default WalletPage;