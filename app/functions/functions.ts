import { interestRate } from "../constants/constants";

export const calculateExpectedBalance = (initialValue: number, creationDate: string) => {
    const currentDate = new Date();
    const startDate = new Date(creationDate);

    const monthsInvested = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());

    const balance = initialValue * Math.pow(1 + interestRate, monthsInvested);

    return parseFloat(balance.toFixed(2));
};

export const calculatePercentage = (initialValue: number, expectedBalance: number | undefined) => {
    const percentage = ((expectedBalance as number * 100) / initialValue) - 100;
    return `${percentage.toFixed(2)}%`;
}