const prices = [5, 10, 12, 18, 2];

const total = prices.reduce(sum)


function sum(accumulator, element) {
  return accumulator + element;
}

console.log(total.toFixed(2))

let grades = [75, 100, 45, 85];
let gradesNew = grades.reduce(gradesMarks);

function gradesMarks(accumulator, element) {
  return Math.max(accumulator, element);
}
console.log(gradesNew)