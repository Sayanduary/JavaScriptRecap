let numbers = [1, 2, 3, 4, 5, 6, 7];
let newNumbers = numbers.filter(isEven)

function isEven(element) {
  return element % 2 === 0;
}

console.log(newNumbers)




let age = [16, 17, 18, 19, 20, 60];
let adults = age.filter(isAdult)
let childs = age.filter(isChild)

function isAdult(element) {
  return element >= 18;
}
function isChild(element) {
  return element < 18;
}
console.log(adults);
console.log(childs)



const words = ["apple", "orange", "bananahh", "kiwi", "coconut"];
const shortWords = words.filter(getShortWords)
function getShortWords(element) {
  return element.length <= 6;
}
console.log(shortWords)


let nums = [1, 2, 3, 44];
let maxNums = nums.filter(function (element) { return element < 4 });

console.log(maxNums)