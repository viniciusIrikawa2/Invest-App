import React, { useContext } from 'react';
import { AppContext } from '../context/InvestmentContext';
import { normalizeDate } from '../helpers';
import { IInvestment } from '../@Types/Investment';

const TableWithdrawawHistory = () => {
    const { transactionHistory } = useContext(AppContext);

    return (
        <div className='mt-10 md:flex md:items-center md:justify-center md:overflow-auto overflow-x-scroll px-1' id='table-transaction'>
            {transactionHistory.length === 0 ? (
                <span className='text-gray-500 text-center'> No transactions. </span>
            ) : (
                <table className='text-in-white md:w-1/2 w-full '>
                    <thead>
                        <tr>
                            <th className='mx-2 md:mx-3 text-xs text-start text-[#909090]'> Owner </th>
                            <th className='mx-2 md:mx-3 text-xs text-start text-[#909090]'> Creation Date </th>
                            <th className='mx-2 md:mx-3 text-xs text-start text-[#909090]'> Initial Value </th>
                            <th className='mx-2 md:mx-3 text-xs text-start text-[#909090]'> Expected Balance </th>
                            <th className='mx-2 md:mx-3 text-xs text-start text-[#909090]'> Tax (%) </th>
                            <th className='mx-2 md:mx-3 text-xs text-start text-[#909090]'> Net Value </th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionHistory.map((item: IInvestment, index: number) => (
                            <tr key={index}>
                                <td className='pr-4 md:pr-3'> {item.owner} </td>
                                <td className='pr-4 md:pr-3'> {normalizeDate(item.creationDate)} </td>
                                <td className='pr-4 md:pr-3'> ${item.initialValue.toFixed(2)} </td>
                                <td className='pr-4 md:pr-3'> ${item.expectedBalance!.toFixed(2)} </td>
                                <td className='pr-4 md:pr-3 text-red-400'> -{item.taxPercentage}% </td>
                                <td className='pr-4 md:pr-3 text-green-400'> ${item.netValue!.toFixed(2)} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default TableWithdrawawHistory;