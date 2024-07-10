'use client';
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/InvestmentContext';
import { IInvestment } from '../@Types/Investment';
import { normalizeDate } from '../helpers';
import Modal from './Modal';
import toast from 'react-hot-toast';

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
        setTransactionHistory([
            ...transactionHistory,
            item
        ]);
        removeInvestmentFromWallet(index);
        toast.success('Success!');
    }

    return (
        <div className='mt-10 flex items-center justify-center px-1'>
            {formData.length === 0 ? (
                <span className='text-gray-500 text-center'> No data here. </span>
            ) : (
                <table className='text-in-white md:w-1/2 w-full '>
                    <thead>
                        <tr>
                            <th className='mx-3 text-xs text-start text-[#909090]'> Owner </th>
                            <th className='mx-3 text-xs text-start text-[#909090]'> Creation Date </th>
                            <th className='mx-3 text-xs text-start text-[#909090]'> Initial Value </th>
                            <th className='mx-3 text-xs text-start text-[#909090]'> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.map((item: IInvestment, index: number) => (
                            <tr key={index}>
                                <td> {item.owner} </td>
                                <td> {normalizeDate(item.creationDate)} </td>
                                <td> ${item.initialValue.toFixed(2)} </td>
                                <td> <button className='bg-gray-600 rounded-sm px-2 py-1 text-xs' 
                                             onClick={() => handleOnClick(item)}> view 
                                    </button> 
                                    <button className='bg-gray-600 rounded-sm px-2 py-1 text-xs mx-1' 
                                             onClick={() => withDraw(item, index)}> withdraw 
                                    </button> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    {showModal && <Modal setShowModal={setShowModal} viewData={viewData!}/>}
                </table>
            )}
        </div>
    )
}

export default Table;