import { interestRate } from "../constants/constants";

export const calculateExpectedBalance = (initialValue: number, creationDate: string): number => {
    const currentDate = new Date();
    const startDate = new Date(creationDate);

    const daysInvested = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

    const dailyRate = Math.pow(1 + interestRate, 1 / 30) - 1;

    const balance = initialValue * Math.pow(1 + dailyRate, daysInvested);

    return parseFloat(balance.toFixed(2));
};

export const calculatePercentage = (initialValue: number, expectedBalance: number | undefined) => {
    const percentage = ((expectedBalance as number * 100) / initialValue) - 100;
    return `${percentage.toFixed(2)}%`;
}