let numbers = [1, 4, 6, 11, 2];
numbers.sort((a, b) => a - b)
console.log(numbers)

// function compareNumbers(a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// numbers.sort(compareNumbers);
// console.log(numbers)

const people = [{ name: "Sayan Duary", age: 24, gpa: 10.0 }, { name: "K Duary", age: 22, gpa: 9.0 }, { name: "D Duary", age: 23, gpa: 8.0 }, { name: "V Duary", age: 20, gpa: 8.7 }]

// people.sort((a, b) => a.age - b.age);
people.sort((a, b) => a.name.localeCompare(b.name))
console.log(people)


const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'K'];
shuffle(cards);
console.log(cards)

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {

    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
}