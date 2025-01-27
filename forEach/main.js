let fruits = ["apple", "mango"];

// function display(element) {
//   console.log(element);

// }

// function upperCase(element, index, array) {
//   array[index] = element.toUpperCase();
// }

// function capatilize(element, index, array) {

//   array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }


// fruits.forEach(capatilize)
// fruits.forEach(display)

fruits.forEach((element, index, array) => {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
})

console.log(fruits)