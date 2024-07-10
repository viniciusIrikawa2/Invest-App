'use client';
import React from 'react';
import { IInvestment } from '../@Types/Investment';
import { normalizeDate } from '../helpers';
import { calculatePercentage } from '../functions/functions';

interface TableProps {
    setShowModal: (value: boolean) => void;
    formData: IInvestment[];
}

const Modal = ({ setShowModal, formData }: TableProps) => {
    return (
        <div className=' h-screen w-full fixed top-0 left-0'>
            <div className='border-4 border-in-white rounded-xl md:w-1/2 w-full h-[60vh] md:mx-0 z-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='flex flex-row items-center justify-between mt-5 mb-20 px-10'>
                    <h3 className='text-in-white text-xl uppercase font-bold'> Investment details </h3>
                    <button className='text-[#4ade80] text-2xl font-bold' title='Close modal' onClick={() => setShowModal(false)}> x </button>
                </div>
                {formData.map((item: IInvestment, index: number) => (
                    <div key={index} className='px-10'>
                        <p className='text-gray-400 mb-1 text-xs'> Owner </p>
                        <span className='text-in-white'>{item.owner}</span>

                        <p className='text-gray-400 mb-1 text-xs mt-5'> Creation Date </p>
                        <span className='text-in-white'>{normalizeDate(item.creationDate)}</span>

                        <div className='flex items-start'>
                            <div>
                                <p className='text-gray-400 mb-1 text-xs mt-5'> Initial Amount </p>
                                <span className='text-in-white'>${item.initialValue.toFixed(2)}</span>
                            </div>
                            <div className='ml-10'>
                                <p className='text-gray-400 mb-1 text-xs mt-5'> Return ({normalizeDate(item.creationDate) + ' - today'}) </p>
                                <div className='text-in-white flex flex-row items-center'> ${item.expectedBalance}  
                                </div> 
                                    <span className='text-xs text-[#4ade80] flex flex-row items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            strokeWidth={1.5} 
                                            stroke="currentColor" 
                                            className="size-4 text-[#4ade80]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                        </svg>
                                        {calculatePercentage(item.initialValue, item.expectedBalance)}
                                    </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div id='background' className='bg-[#000000d7] w-full h-screen absolute top-0 left-0'></div>
        </div>
    )
}

export default Modal;