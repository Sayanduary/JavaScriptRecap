const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// function changeColor(event) {
//   myBox.style.backgroundColor = "Black";
//   myBox.style.color = "White";

// }
myBox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "Black";
  myBox.style.color = "White";
  myBox.textContent = "Hello User"
})
myBox.addEventListener("mouseout", () => {
  myBox.style.backgroundColor = "Blue";
  myBox.style.color = "White";
  myBox.textContent = "Hello Universe"
})
myBox.addEventListener("mouseover", () => {
  myBox.style.backgroundColor = "Green";
  myBox.style.color = "White";
  myBox.textContent = "Hello World"
})

