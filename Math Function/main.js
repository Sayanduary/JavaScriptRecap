const myBtn = document.getElementById("myBtn");
const myLabel = document.getElementById("label");

const Max = 6;
const Min = 1;
let randomNum;

myBtn.onclick = function () {
  randomNum = Math.floor(Math.random() * Max) + Min;
  myBtn.textContent = randomNum;
}