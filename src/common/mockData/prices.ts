
enum MONTHS {
    APRIL = 'Апрель',
    MAY = 'Май',
    JUNE = 'Июнь',
    JULY = 'Июль',
    AUGUST = 'Август',
    SEPTEMBER = 'Сентябрь',
    OCTOBER ='Октябрь',
}
export interface IPrice {
  month: string;
  price: number;
  promotion?: boolean;
}

export interface IPriceTable {
    year: number,
    pricesByMonths: IPrice[];
}
export const standard: IPriceTable = {
    year: 2024,
    pricesByMonths:[
        {month: MONTHS.APRIL, price: 1500},
        {month: MONTHS.MAY, price: 2000},
        {month: MONTHS.JUNE, price: 3000},
        {month: MONTHS.JULY, price: 5000, promotion: true},
        {month: MONTHS.AUGUST, price: 6000},
        {month: MONTHS.SEPTEMBER, price: 5500},
        {month: MONTHS.OCTOBER, price: 2000},
    ]
};

export const semiLuxurySeaView: IPriceTable = {
    year: 2024,
    pricesByMonths:[
        {month: MONTHS.APRIL, price: 2000},
        {month: MONTHS.MAY, price: 2500},
        {month: MONTHS.JUNE, price: 3500},
        {month: MONTHS.JULY, price: 6000, promotion: true},
        {month: MONTHS.AUGUST, price: 7000},
        {month: MONTHS.SEPTEMBER, price: 6000},
        {month: MONTHS.OCTOBER, price: 2500},
    ],
};

export const semiLuxuryFamily: IPriceTable = {
    year: 2024,
    pricesByMonths: [
        {month: MONTHS.APRIL, price: 2500},
        {month: MONTHS.MAY, price: 3000},
        {month: MONTHS.JUNE, price: 4500},
        {month: MONTHS.JULY, price: 7500, promotion: true},
        {month: MONTHS.AUGUST, price: 8000},
        {month: MONTHS.SEPTEMBER, price: 7000},
        {month: MONTHS.OCTOBER, price: 3000},
    ],
};
