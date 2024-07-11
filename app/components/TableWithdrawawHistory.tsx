import React, { useContext } from 'react';
import { AppContext } from '../context/InvestmentContext';
import { normalizeDate } from '../helpers';
import { IInvestment } from '../@Types/Investment';

const TableWithdrawawHistory = () => {
    const { transactionHistory } = useContext(AppContext);

    return (
        <div className='mt-10 h-[50vh] md:flex md:justify-center md:overflow-auto overflow-x-scroll px-1' id='table-transaction'>
            <div className='h-[50vh] overflow-y-scroll md:w-1/2 w-full px-1'>
                {transactionHistory.length === 0 ? (
                    <div className='flex items-center justify-center'>
                        <span className='text-gray-500 text-center' id='msg-empty-transaction'> No transactions. </span>
                    </div>
                ) : (
                    <table className='text-in-white md:w-1/2 w-full' id='table-withdrawal'>
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
                                    <td className='pr-4 md:pr-3'> {normalizeDate(item.creationDate, 1)} </td>
                                    <td className='pr-4 md:pr-3'> ${item.initialValue.toFixed(2)} </td>
                                    <td className='pr-4 md:pr-3'> ${item.expectedBalance!.toFixed(2)} </td>
                                    <td className='pr-4 md:pr-3 text-red-400'> -{item.taxPercentage}% </td>
                                    <td className='pr-4 md:pr-3 text-in-green'> ${item.netValue!.toFixed(2)} </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}

export default TableWithdrawawHistory;