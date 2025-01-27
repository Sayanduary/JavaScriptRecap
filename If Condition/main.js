const myBtn = document.getElementById("btn");
const inputText = document.getElementById("myText");
const emptyItem = document.getElementById("h3-text");

let age;
myBtn.onclick = function () {
  age = inputText.value;
  if (age >= 18) {
    emptyItem.textContent = "Youre old enough to vote";
  } else if (age < 18) {
    emptyItem.textContent = "You are not enough old to vote";
  }
}