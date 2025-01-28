const hello = (name, age) => {
  console.log(name + " Hello World " + age + " Years Old ")
}
  ;
hello("Sayan", 27);

setTimeout(() => {
  console.log("Hello World");
}, 3000);

let nums = [1, 2, 3, 4];
let sqaure = nums.map((element) => {
  return Math.pow(element, 2);
})

console.log(sqaure)

let students = ["Sa", "Pabitra"];
let filteredStudents = students.filter((element) => {
  return element.length == 2;
})
console.log(filteredStudents)