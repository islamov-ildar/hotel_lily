export interface IRoomDescription {
    title: string;
    area: number;
    sleep_place: number;
    additional_sleep_place: number;
    additional_sleep_place_price: {
        from: number;
        to: number;
    };
    chambersCount: number;
    floor: {
        firstFloor: boolean;
        secondFloor: boolean;
    },
    furniture: string;
    amenities: string;
}
export const standartRoomDescription: IRoomDescription = {
    title: 'Стандарт',
    area: 23,
    sleep_place: 2,
    additional_sleep_place: 2,
    additional_sleep_place_price: {
        from: 1200,
        to: 1500,
    },
    chambersCount: 1,
    floor: {
        firstFloor: true,
        secondFloor: true,
    },
    furniture: 'двуспальная кровать, кресло-кровать, стол, стулья, шкаф, вешалка, зеркало.',
    amenities: 'сплит-система, холодильник, спутниковое ТВ, телевизор, Wi-Fi интернет, эл. чайник, посуда, фен, терраса.',
};
