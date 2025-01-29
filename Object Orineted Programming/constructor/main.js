
// const car1 = {
//   make: "Ford",
//   model1: "Camaro",
//   color: "Black",
//   drive: function () {
//     console.log(`You Drive the ${this.model1}`)
//   },
// }


// const car2 = {
//   make: "Ford",
//   model1: "Camaro",
//   color: "Black",
//   drive: function () {
//     console.log(`You Drive the ${this.model1}`)
//   },
// }


// const car3 = {
//   make: "Ford",
//   model1: "Camaro",
//   color: "Black",
//   drive: function () {
//     console.log(`You Drive the ${this.model1}`)
//   },
// }


// So We can create the objects with constructor to build automatically

function Car(make, model, year, color) {
  this.make = make;
  this.model = model,
    this.year = year,
    this.color = color;
  this.drive = function () {
    console.log("You Druve");
  }
}

const car1 = new Car("Mercedes", "Bench", 2025, "Black");
console.log(car1.make);
car1.drive()