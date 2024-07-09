'use client';
import React, { useContext, useState } from 'react';
import { today } from '../constants/constants';
import { AppContext } from '../context/InvestmentContext';
import { IInvestment } from '../@Types/Investment';
import toast from 'react-hot-toast';

const CreatePage = () => {
  const initialData = {
    owner: '',
    creationDate: '',
    initialValue: 0
}

  const {setFormData} = useContext(AppContext);
  
  const [data, setData] = useState<IInvestment>(initialData);

  const handleInputNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/[^0-9]/g, '');

    setData({
      ...data,
      initialValue: sanitizedValue ? parseInt(sanitizedValue, 10) : 0
    });
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value
    })
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setFormData(data);
    toast.success('Success!');
  };

  return (
    <main>
      <h1 className='mt-14 ml-10 text-in-white text-xl uppercase font-bold'> Create your investment </h1>
      <div className='mt-10 h-full flex items-center justify-center'>
        <form onSubmit={handleSubmit} className='w-1/5 flex flex-col'>
          <label htmlFor="owner" className='text-gray-400 mb-1 text-xs'> Owner </label>
          <input className='text-black mb-5 rounded-sm p-2' 
                 onChange={handleInputChange} 
                 type="text" 
                 id='owner' 
                 name='owner' 
                 required/>

          <label htmlFor="creation-date" className='text-gray-400 mb-1 text-xs'> Creation date </label>
          <input className='text-black mb-5 rounded-sm p-2' 
                 onChange={handleInputChange} 
                 type="date" 
                 id='creation-date' 
                 name='creationDate' 
                 max={today} 
                 required/>

          <label htmlFor="initial-value" className='text-gray-400 mb-1 text-xs'> Amount to invest </label>
          <input className='text-black mb-5 rounded-sm p-2' 
                 type="text" 
                 id='initial-value' 
                 onChange={handleInputNumberChange} 
                 name='initialValue'
                 value={data.initialValue}
                 pattern="\d*" 
                 required/>

          <button type='submit' className='bg-[#4ade80] text-[#2f2f2f] font-bold py-3 rounded-md uppercase'> Invest </button>
        </form>
      </div>
    </main>
  )
}

export default CreatePage;
