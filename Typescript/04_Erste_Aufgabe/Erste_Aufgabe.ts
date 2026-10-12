interface Car {
    brand: string;
    model: string;
    price: number;
    year: number;

}


const cars: Car[] = [
    {
        brand: "Skoda",
        model: "Fabia",
        price: 3000,
        year: 2010
    },
    {
        brand: "Volkswagen",
        model: "Golf",
        price: 5500,
        year: 2014
    },
    {
        brand: "Audi",
        model: "A4",
        price: 12000,
        year: 2017
    },
    {
        brand: "BMW",
        model: "320",
        price: 9500,
        year: 2015
    }
];




function getTotalPrice(cars: Car[]): number {
    let sum = 0;

    for (const car of cars) {
        sum += car.price;
    }

    return sum;
};

function getListofCars(cars: Car[]): void {

    for (const car of cars) {

        console.log(cars);
    }


};

function getExpensiveCars(cars: Car[], minprice: number) {
    let value = 0;

    read

}