'use client'
import ApexCharts from 'apexcharts';
import React, { useEffect } from 'react'
import { IInvestment } from '../@Types/Investment';
import { calculatePercentage, chartOptions } from '../functions/functions';
import { normalizeDate } from '../helpers';
import { today } from '../constants/constants';

interface IChartProps  {
    viewData: IInvestment;
}

const Chart = ({ viewData }: IChartProps) => {
    const dates = [normalizeDate(viewData.creationDate , 2), normalizeDate(today , 2)];
    const incomes = [viewData.initialValue.toFixed(2), viewData.expectedBalance?.toFixed(2)];

    useEffect(() => {
        const options = chartOptions(dates, incomes);
        if (document.getElementById("labels-chart") && typeof ApexCharts !== 'undefined') {
            const chart = new ApexCharts(document.getElementById("labels-chart"), options);
            chart.render();
        }
    }, []);

    return (
        <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
                <div
                    className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                    {calculatePercentage(viewData.initialValue, viewData.expectedBalance)}
                    <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
                    </svg>
                </div>
            </div>
            <div id="labels-chart" className="px-2.5"></div>
        </div>

    )
}

export default Chart
