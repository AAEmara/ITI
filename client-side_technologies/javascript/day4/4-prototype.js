#!/usr/bin/node

/* Requirement 1. Create a base class Vehicle with:
 *   - Own property `type`, set in the constructor.
 *   - Prototype method `describe()` that logs a description of the vehicle.
**/
class Vehicle {
  type;
  energyType
  manufacturingYear;

  constructor (energyType, type='car', manufacturingYear=1997) {
    this.type = type;
    this.energyType = energyType;
    this.manufacturingYear = manufacturingYear;
  }
}

Vehicle.prototype.describe = function () {
  console.log(`This vehicle is a ${this.type}.\nIt was made in \
${this.manufacturingYear}.`);
};

/* Requirement 2. Create a subclass named Car that extends Vehicle with:
 *   - Own property `brand`, set in the constructor.
 *   - Prototype method `honk()` that logs honking sounds.
**/
class Car extends Vehicle {
  brand;
  passengersNumber

  constructor (type, brand, passengersNumber, energyType, manufacturingYear) {
    super(type, energyType, manufacturingYear);
    this.brand = brand;
    this.passengersNumber = passengersNumber;
  }
}

Car.prototype.honk = () => {
  console.log("Beep Beep");
};

/* Requirement 3. Create a subclass named ElectricCar that extends Car with:
 *   - Own property `batteryRange`, set in the constructor.
 *   - Prototype method `charge()` that logs a charging message.
**/
class ElectricCar extends Car {
  batteryRange;

  constructor (type, brand, passengersNumber,
               batteryRange, energyType, manufacturingYear) {
    super(type, brand, passengersNumber,
          energyType, manufacturingYear);
    this.batteryRange = batteryRange;
  }
}

ElectricCar.prototype.charge = () => {
  process.stdout.write('Charging your car has started 🔌...\n');
  for (let i = 0; i < 5; i++) {
    process.stdout.write('⚡');
  }
  console.log('\nYour car has been charged successfully!🔋');
};

/* Requirement 4. Add prototype property `maxSpeed` to Vehicle prototype 
 * after defining the classes.
**/
Vehicle.prototype.maxSpeed = "100km/hr";

/* Requirement 5. Create an instance of ElectricCar and:
 *   - Call methods from all levels of heirarchy (describe, honk, charge).
 *   - Access the maxSpeed prototype property.
 *   - Log the prototype chain to show inheritance.
**/

const car1 = new ElectricCar(
  'electricity',
  'Tesla',
  300,
  5,
  'car',
  2025
);

console.log("Call methods from all levels of heirarchy",
"(describe, honk, charge).");
console.log("==========================================" +
"=========================");

console.log("describe():");
car1.describe();
console.log("\nhonk():");
car1.honk();
console.log("\ncharge():");
car1.charge();

console.log("\nAccess the maxSpeed prototype property.");
console.log("=======================================");
console.log(`Max speed of ${car1.brand} is ${car1.maxSpeed}`);

console.log("\nLog the prototype chain to show inheritance.");
console.log("============================================");
console.log("Prototype of ElectricCar:", ElectricCar.prototype);
console.log("Prototype of ElectricCar's Parent (Car):",
ElectricCar.prototype.__proto__);
console.log("Prototype of ElectricCar's Ancestor (Vehicle):", 
ElectricCar.prototype.__proto__.__proto__);
console.log("Prototype of ElectricCar's Object Level:", 
ElectricCar.prototype.__proto__.__proto__.__proto__);
console.log("Prototype of ElectricCar's outside the Object Level:",
ElectricCar.prototype.__proto__.__proto__.__proto__.__proto__);
