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

    cars.forEach(car => {
        sum += car.price;
    });

    return sum;
}

function getListofCars(cars: Car[]): void {
    cars.forEach(car => {
        console.log(car);
    });

}

function getExpensiveCars(cars: Car[], minPrice: number) {
    minPrice = 5000;
    cars.forEach(car => {
        if (car.price > minPrice) {
            console.log(car);
        }
    });
}



function getTotalPrice2(cars: Car[]): number {
    return cars.reduce((sum, car) => sum + car.price, 0);
}

function getListofCars2(cars: Car[]): string[] {
    return cars.map(car => car.brand);
}



//nicht fertig
function getExpensiveCars2(cars: Car[], minPrice: number): Car[] {
    return cars.filter(car => car.price > minPrice);
}



console.log(getTotalPrice(cars));
console.log(getTotalPrice2(cars));
