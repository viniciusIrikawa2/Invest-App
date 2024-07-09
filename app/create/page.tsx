'use client';
import React from 'react';
import { today } from '../constants/constants';

const CreatePage = () => {

  const handleInputNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/[^0-9]/g, '');
    e.target.value = sanitizedValue;
  };

  return (
    <main>
      <h1 className='mt-14 ml-10 text-in-white text-xl uppercase font-bold'> Create your investment </h1>
      <div className='mt-10 h-full flex items-center justify-center'>
        <form action="" className='w-1/5 flex flex-col'>
          <label htmlFor="owner" className='text-gray-400 mb-1 text-xs'> Owner </label>
          <input className='text-black mb-5 rounded-sm p-2' type="text" id='owner' required/>

          <label htmlFor="creation-date" className='text-gray-400 mb-1 text-xs'> Creation date </label>
          <input className='text-black mb-5 rounded-sm p-2' type="date" id='creation-date' max={today} required/>

          <label htmlFor="initial-value" className='text-gray-400 mb-1 text-xs'> Initial value </label>
          <input className='text-black mb-5 rounded-sm p-2' type="text" id='initial-value' onChange={handleInputNumberChange} pattern="\d*" required/>

          <button className='bg-[#4ade80] text-[#2f2f2f] font-bold py-3 rounded-md uppercase'> Create </button>
        </form>
      </div>
    </main>
  )
}

export default CreatePage;
