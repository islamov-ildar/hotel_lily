export interface IRoomDescription {
    title: string;
    area: number;
    sleep_place: number;
    additional_sleep_place: number;
    onlyOnSecondFloor: boolean,
    furniture: string;
    amenities: string;
}
export const standartRoomDescription: IRoomDescription = {
    title: 'Стандарт',
    area: 23,
    sleep_place: 2,
    additional_sleep_place: 2,
    onlyOnSecondFloor: false,
    furniture: 'двуспальная кровать, кресло-кровать, стол, стулья, шкаф, вешалка, зеркало.',
    amenities: 'сплит-система, холодильник, спутниковое ТВ, телевизор, Wi-Fi интернет, эл. чайник, посуда, фен, терраса.',
};

export const semiluxRoomDescription: IRoomDescription = {
    title: 'Полулюкс с видом на море',
    area: 27,
    sleep_place: 2,
    additional_sleep_place: 2,
    onlyOnSecondFloor: true,
    furniture: 'двуспальная кровать, кресло-кровать, стол, стулья, шкаф, вешалка, зеркало.',
    amenities: 'сплит-система, холодильник, спутниковое ТВ, телевизор, Wi-Fi интернет, эл. чайник, посуда, фен, терраса.',
};

export const familySemiluxRoomDescription: IRoomDescription = {
    title: 'Семейный полулюкс',
    area: 35,
    sleep_place: 3,
    additional_sleep_place: 4,
    onlyOnSecondFloor: true,
    furniture: 'двуспальная кровать, диван-кровать, стол, стулья, шкаф, вешалка, зеркало, раскладная кровать.',
    amenities: 'сплит-система, холодильник, цифровое ТВ, телевизор, Wi-Fi интернет, эл. чайник, посуда, фен, терраса, вид на улицу.',
};
