

document.title = "My Website"

let count = 0;
function toggle() {
  count++;

  if (count % 2 === 0) {
    const currentColor = document.body.style.backgroundColor = "White";
  } else {
    const currentColor = document.body.style.backgroundColor = "Black";
  }

}

const userName = ""
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += userName === "" ? ' Guest' : userName;

const myHeading = document.getElementById("my-heading")

myHeading.style.backgroundColor = "White";
myHeading.style.textAlign = "Center"

const fruits = document.getElementsByClassName("fruits");
console.log(fruits)

Array.from(fruits).forEach((element) => {
  element.style.backgroundColor = "Yellow";
});

const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements)

const listItem = document.getElementsByTagName("li");

Array.from(h4Elements).forEach((element => {
  element.style.backgroundColor = "Violet"
}))

Array.from(listItem).forEach((element)=>{
  element.style.backgroundColor="Black"
  element.style.color="White";
  element.style.padding="12px";
}) 