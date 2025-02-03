
let buttons = document.querySelectorAll(".myBtn");

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myBtn";
document.body.appendChild(newButton)
buttons = document.querySelectorAll(".myBtn");

buttons=document.querySelectorAll(".myBtn")
buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.style.backgroundColor === "red") {
      button.style.backgroundColor = "blue";
    } else {
      button.style.backgroundColor = "red";

    }

  })

});

buttons.forEach(button => {
  button.addEventListener("click", event => {
    event.target.remove();
    console.log(button);
  })
})