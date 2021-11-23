function Car (make, model, color, fuelType) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.fuelType = fuelType;
}

Car.prototype.markModel = function () {
    return {
        make: this.make,
        model: this.model
    }
}

Car.prototype.checkingFuel = function () {
    if (this.fuelType === 'Diesel') {
        return "Automobilis varomas dyzeliu";
    } else if (this.fuelType === 'Petrol') {
        return "Automobilis varomas benzinu";
    } else if (this.fuelType === 'Electricity') {
        return "Automobilis varomas elektra"
    }
}

const car = new Car ('BMW', 'X5', 'Black', 'Diesel');
console.log(car.markModel());
console.log(car.checkingFuel());