import React, { useContext } from 'react';
import { AppContext } from '../context/InvestmentContext';
import { IInvestment } from '../@Types/Investment';

const Table = () => {
    const { formData } = useContext(AppContext);
    
    return (
        <div className='mt-10 flex items-center justify-center px-3'>
            {formData.length === 0 ? (
                <span className='text-gray-500 text-center'> No data here. </span>
            ) : (
                <table className='text-in-white md:w-1/2 w-full '>
                    <thead>
                        <tr>
                            <th className='mx-3 text-xs text-start text-[#909090]'> Owner </th>
                            <th className='mx-3 text-xs text-start text-[#909090]'> Creation Date </th>
                            <th className='mx-3 text-xs text-start text-[#909090]'> Initial Value </th>
                            <th className='mx-3 text-xs text-start text-[#909090]'> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.map((item: IInvestment, index: number) => (
                            <tr key={index}>
                                <td> {item.owner} </td>
                                <td> {item.creationDate} </td>
                                <td> ${item.initialValue.toFixed(2)} </td>
                                <td> <button className='bg-gray-600 rounded-md px-2 py-2 text-xs'> view </button> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Table;