export interface IInvestment {
    owner: string,
    creationDate: string,
    initialValue: number,
    expectedBalance?: number
    netValue?: number;
    taxPercentage?: number;
}