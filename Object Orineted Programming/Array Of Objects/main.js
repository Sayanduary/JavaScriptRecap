const fruits = [
  { name: "Apple", color: "red", calories: 150 },
  { name: "Orange", color: "yellow", calories: 23 },
  { name: "Banana", color: "yellow", calories: 12 },
  { name: "Watermellon", color: "pink", calories: 72 }
]

fruits.push({ name: "Grapes", color: "Green", calories: 344 })

fruits.forEach(fruit => {
  console.log(fruit)
})

const fruitNames = fruits.map(fruit => fruit.name)

console.log(fruitNames)

const yellowFruits = fruits.filter(fruit =>{
  return fruit.color==="yellow"
})

console.log(yellowFruits)

const higherCaloriesFoods = fruits.filter(fruit => {
  return fruit.calories > 100;
})
console.log(higherCaloriesFoods)

