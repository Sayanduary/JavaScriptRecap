const number = [1, 2, 4, 5];
const newArray = number.map(square)
const cubes = number.map(cube)

function square(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
}

// Removed the maximum function as it is not needed
const students = ["sayan", "pabitra"];

const newStudents = students.map(cap)

function cap(element) {
  return element.charAt(0).toUpperCase() + element.slice(1);
}


const dates = ["2025-1-10", "2025-2-20"];
const newDates = dates.map(formatDates)

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}}`;
}


console.log(newArray)
console.log(cubes)
console.log(newStudents)
// console.log(max) // Removed as it is not defined
console.log(newDates)


let nums = [1, 2, 3, 5];
let squaredNums = nums.map(function (element) {
  return Math.pow(element, 2);
})

console.log(squaredNums)