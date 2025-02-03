const myImage = document.getElementById("myImg");
const myButton = document.getElementById("myBtn");

myButton.addEventListener("click", event => {
  if (myImage.style.visibility === "hidden") {
    myImage.style.visibility = "visible";
    myButton.textContent = "Hide";
  } else {
    myImage.style.visibility = "hidden";
    myButton.textContent = "Show";
  }

})