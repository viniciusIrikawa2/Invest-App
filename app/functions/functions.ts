import { interestRate } from "../constants/constants";

export const calculateExpectedBalance = (initialValue: number, creationDate: string) => {
    const currentDate = new Date();
    const startDate = new Date(creationDate);

    const monthsInvested = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());

    const balance = initialValue * Math.pow(1 + interestRate, monthsInvested);
    parseFloat(balance.toFixed(2));

    return balance;
};