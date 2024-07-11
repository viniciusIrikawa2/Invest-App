'use client';
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/InvestmentContext';
import { IInvestment } from '../@Types/Investment';
import { normalizeDate } from '../helpers';
import Modal from './Modal';
import toast from 'react-hot-toast';
import { calculateTax } from '../functions/functions';
import Link from 'next/link';

const Table = () => {
    const { formData, setFormData, setTransactionHistory, transactionHistory } = useContext(AppContext);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [viewData, setViewData] = useState<IInvestment>();
    
    const handleOnClick = (item: IInvestment) => {
        setShowModal(true);
        setViewData(item);
    }

    const removeInvestmentFromWallet = (index: number) => {
        const updatedFormData = formData.filter((_, idx: number) => idx !== index);
        setFormData(updatedFormData);
    };

    const withDraw = (item: IInvestment, index: number) => {
        const taxPercentage = calculateTax(item);
        const netValue = item.expectedBalance! * (1 - taxPercentage / 100);

        const updatedItem = {
            ...item,
            netValue: parseFloat(netValue.toFixed(2)), 
            taxPercentage: parseFloat(taxPercentage.toFixed(2))
        };
    
        setTransactionHistory([
            updatedItem,
            ...transactionHistory
        ]);
        removeInvestmentFromWallet(index);
        toast.success('Success!');
    }

    return (
        <div className='mt-10 flex items-center justify-center'>
            <div className='h-[50vh] overflow-y-scroll md:w-1/2 w-full px-1'>
                {formData.length === 0 ? (
                    <div className='flex items-center justify-center'>
                        <span className='text-gray-500 text-center' id='msg-empty-wallet'> No data. <Link className='text-gray-500 text-center underline' href='/create'> Invest here </Link>  </span>
                    </div>
                ) : (
                    <table className='text-in-white w-full' id='table-wallet'>
                        <thead>
                            <tr>
                                <th className='mx-1 text-xs text-start text-[#909090]'> Owner </th>
                                <th className='mx-1 text-xs text-start text-[#909090]'> Creation Date </th>
                                <th className='mx-1 text-xs text-start text-[#909090]'> Initial Value </th>
                                <th className='mx-1 text-xs text-start text-[#909090]'> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.map((item: IInvestment, index: number) => (
                                <tr key={index}>
                                    <td> {item.owner} </td>
                                    <td> {normalizeDate(item.creationDate, 1)} </td>
                                    <td> ${item.initialValue.toFixed(2)} </td>
                                    <td> <button className='bg-gray-600 rounded-sm px-2 py-1 text-xs' 
                                                onClick={() => handleOnClick(item)}
                                                id='btn-view'> view 
                                        </button> 
                                        <button className='bg-gray-600 rounded-sm px-2 py-1 text-xs mx-1' 
                                                onClick={() => withDraw(item, index)}
                                                id='btn-withdraw'> withdraw 
                                        </button> 
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                {showModal && <Modal setShowModal={setShowModal} viewData={viewData!}/>}
            </div>
        </div>
    )
}

export default Table;