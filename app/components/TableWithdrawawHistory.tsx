import React, { useContext } from 'react';
import { AppContext } from '../context/InvestmentContext';
import { normalizeDate } from '../helpers';
import { IInvestment } from '../@Types/Investment';

const TableWithdrawawHistory = () => {
    const { transactionHistory } = useContext(AppContext);

    return (
        <div className='mt-10 flex items-center justify-center px-1'>
            {transactionHistory.length === 0 ? (
                <span className='text-gray-500 text-center'> No transactions. </span>
            ) : (
                <table className='text-in-white md:w-1/2 w-full '>
                    <thead>
                        <tr>
                            <th className='mx-3 text-xs text-start text-[#909090]'> Owner </th>
                            <th className='mx-3 text-xs text-start text-[#909090]'> Creation Date </th>
                            <th className='mx-3 text-xs text-start text-[#909090]'> Initial Value </th>
                            <th className='mx-3 text-xs text-start text-[#909090]'> Final Balance </th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionHistory.map((item: IInvestment, index: number) => (
                            <tr key={index}>
                                <td> {item.owner} </td>
                                <td> {normalizeDate(item.creationDate)} </td>
                                <td> ${item.initialValue.toFixed(2)} </td>
                                <td> ${item.expectedBalance!.toFixed(2)} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default TableWithdrawawHistory;