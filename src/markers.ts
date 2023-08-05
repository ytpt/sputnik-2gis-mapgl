export interface IMarker {
    id: number;
    name: string;
    coordinates: number[];
    image: string;
    text: string;
    offset: number[];
}

export type IMarkers = IMarker[];

export const markers: IMarkers = [
    {
        id: 1,
        name: "Природный вечный огонь",
        coordinates: [91.583639, 53.748888],
        image: "assets/marker1.jpg",
        text: "В деревнях нет газа, зато тут есть.",
        offset: [-50, -50],
    },
    {
        id: 2,
        name: "Гора Шишка",
        coordinates: [91.591005, 53.738516],
        image: "assets/marker2.jpg",
        text: "На вершине Вас ждёт мирамидка, которой боолее 4 тысяч лет.",
        offset: [43, 0],
    },
    {
        id: 3,
        name: "Гора Тепсей",
        coordinates: [91.55769, 53.951395],
        image: "assets/marker3.jpg",
        text: "Самый красивый вид Хакасии.",
        offset: [-50, -50],
    },
];