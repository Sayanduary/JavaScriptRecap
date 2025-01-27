const fruits = ['apple', 'banana', 'orange']
// for (i = fruits.length-1; i >=0; i--) {


//   console.log(fruits[i]);
// }

// for (let items of fruits) {
//   console.log(items)
// }

// for(let items in   fruits){
//   console.log(items)
// }
// let fruits1 = [];
// fruits.forEach((currentElement) => {
//   fruits1.push(currentElement);
// });
// fruits1.forEach((currentElement,index,arr)=>{
//   console.log(currentElement,index)
// })

// let totalFruits = fruits.map((currentElement, index, arr) => {

//   return (`${currentElement}, ${index}`);
// })
// console.log(totalFruits)

// let fruitsAll = ["apple", "Mango", "Water Mellon"]
// // fruitsAll.push('Banana');
// // fruitsAll.unshift('Hello')
// fruitsAll.splice(2,0,'Hello');
// console.log(fruitsAll)
// console.log(fruitsAll.indexOf(0,'Water Mellon'))
// console.log(fruitsAll.includes('Mango')) 


const months = ["Jan", "march", "April", "June", "July"];
months.splice(months.length, 0, "Dec");

const indexToUpadte = months.indexOf('march');
months.splice(indexToUpadte, 1, 'March')
console.log(months)

const deleteIndex = months.indexOf('June');
console.log(deleteIndex)

months.splice(deleteIndex, 1)
console.log(months)


const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 7]

const result = numbers.find((curreElement) => {

    return curreElement>5;

})

console.log(result)