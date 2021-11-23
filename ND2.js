class Car {
    constructor(make, model, color, fuelType) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.fuelType = fuelType;
    }
    markModel() {
        return {
            make: this.make,
            model: this.model
        }
    }
    checkingFuel() {
        if (this.fuelType === 'Diesel') {
            return "Automobilis varomas dyzeliu";
        } else if (this.fuelType === 'Petrol') {
            return "Automobilis varomas benzinu";
        } else if (this.fuelType === 'Electricity') {
            return "Automobilis varomas elektra"
        }
    }
}
const car = new Car ('BMW', 'X5', 'Black', 'Diesel');
console.log(car.markModel());
console.log(car.checkingFuel());