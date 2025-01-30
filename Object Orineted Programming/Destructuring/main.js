let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b)

const colors = ["red", "green", "black", "white"];
[colors[0], colors[3]] = [colors[3], colors[0]];
console.log(colors[3])


const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(extraColors)

const person1 = {
  firstName: "Sayan",
  lastName: "Duary",
  age: 24,
}


const { firstName, lastName, age } = person1;
console.log(firstName, lastName, age)

function display({ firstName, lastName, age }) {
  console.log(`name:${firstName} ${lastName} ${age}`);
}

display(person1)