import { IInvestment } from "../@Types/Investment";
import { interestRate } from "../constants/constants";

export const calculateExpectedBalance = (initialValue: number, creationDate: string): number => {
    const currentDate = new Date();
    const startDate = new Date(creationDate);

    const daysInvested = (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);

    const dailyRate = Math.pow(1 + interestRate, 1 / 30) - 1;

    const balance = initialValue * Math.pow(1 + dailyRate, daysInvested);

    return parseFloat(balance.toFixed(2));
};

export const calculatePercentage = (initialValue: number, expectedBalance: number | undefined) => {
    const percentage = ((expectedBalance as number * 100) / initialValue) - 100;
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