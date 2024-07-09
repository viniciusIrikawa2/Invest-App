'use client';
import React, { useContext } from 'react';
import { AppContext } from '../context/InvestmentContext';

interface TableProps {
    setShowModal: (value: boolean) => void;
}

const Modal = ({ setShowModal }: TableProps) => {
    const { formData } = useContext(AppContext);

    return (
        <div className=' h-screen w-full fixed top-0 left-0'>
            <div className='border-4 border-in-white rounded-xl md:w-1/2 w-full h-[60vh] md:mx-0 mx-3 z-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='flex flex-row items-center justify-between mt-5 px-10'>
                    <h3 className='text-in-white text-xl uppercase font-bold'> Investment details </h3>
                        <button className='text-[#4ade80] text-2xl font-bold' title='Close modal' onClick={() => setShowModal(false)}> x </button>
                </div>
            </div>
            <div id='background' className='bg-[#0000009f] w-full h-screen absolute top-0 left-0'></div>
        </div>
    )
}

export default Modal;