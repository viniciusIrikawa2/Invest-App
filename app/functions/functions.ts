import { IInvestment } from "../@Types/Investment";
import { interestRate } from "../constants/constants";
import ApexCharts from 'apexcharts';

export const calculateExpectedBalance = (initialValue: number, creationDate: string): number => {
    const currentDate = new Date();
    const startDate = new Date(creationDate);

    const daysInvested = (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);

    const dailyRate = Math.pow(1 + interestRate, 1 / 30) - 1;

    const balance = initialValue * Math.pow(1 + dailyRate, daysInvested);

    return parseFloat(balance.toFixed(2));
};

export const calculatePercentage = (initialValue: number, expectedBalance: number | undefined) => {
    const percentage = ((expectedBalance as number - initialValue) / initialValue) * 100;
    return `${percentage.toFixed(2)}%`;
}

export const calculateTax = (item: IInvestment): number => {
    const currentDate = new Date();
    const creationDate = new Date(item.creationDate);
    const diffYears = currentDate.getFullYear() - creationDate.getFullYear();

    if (diffYears < 1) {
        return 22.5;
    } else if (diffYears >= 1 && diffYears < 2) {
        return 18.5;
    } else {
        return 15;
    }
};

export const chartOptions = (dates: any, incomes: any) => {
    const options = {
        xaxis: {
            show: true,
            categories: dates,
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                }
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: true,
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                },
                formatter: function (value: any) {
                    return '$' + value;
                }
            }
        },
        series: [
            {
                name: "Income",
                data: incomes,
                color: "#4ade80",
            },
           
        ],
        chart: {
            sparkline: {
                enabled: false
            },
            height: "70%",
            width: "100%",
            type: "area",
            fontFamily: "Inter, sans-serif",
            dropShadow: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            enabled: false,
            x: {
                show: false,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
                shade: "#1C64F2",
                gradientToColors: ["#1C64F2"],
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 2,
        },
        legend: {
            show: false
        },
        grid: {
            show: true,
        },
    }

    return options;
};