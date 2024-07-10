'use client';
import React, { useContext, useEffect, useState } from 'react';
import Table from '../components/Table';
import Modal from '../components/Modal';
import { AppContext } from '../context/InvestmentContext';
import { calculateExpectedBalance } from '../functions/functions';
import { IInvestment } from '../@Types/Investment';

const WalletPage = () => {
    const { formData, setFormData } = useContext(AppContext);

    useEffect(() => {
        const updatedFormData = formData.map((item: IInvestment) => ({
            ...item,
            expectedBalance: calculateExpectedBalance(item.initialValue, item.creationDate)
        }));

        setFormData(updatedFormData);
    }, []);

    return (
        <div>
            <h1 className='mt-14 ml-10 text-in-white text-xl uppercase font-bold'> My Wallet </h1>
            <Table/>
        </div>
    )
}

export default WalletPage;