// function sum(...elements) {
//   let result = 0;
//   for (let number of elements) {
//     result += number;
//   }
//   return result;
// }

// const Total = sum(1, 2, 3, 4,10);
// console.log(Total)


// function avg(...elements) {
//   let result = 0;
//   for (let number of elements) {
//     result += number;
//   }
//   return result / elements.length;
// }

// const Avg = avg(1, 2, 3, 4, 10);
// console.log(Avg)

function combineStrings(...strings) {
  return strings.join(" ")
}

const fullName = combineStrings("Mr", "Sayan", "Duary")
console.log(fullName)