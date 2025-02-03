const myBox = document.getElementById("myBox");

const moveAmount = 10;
let x = 0;
let y = 0;

// Ensure the box is positioned absolutely or relatively
myBox.style.position = "absolute";

document.addEventListener("keydown", event => {
  if (event.key.startsWith("Arrow")) {
    event.preventDefault(); // Prevent default scrolling behavior

    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }

    // Boundary checks (optional)
    // const maxX = window.innerWidth - myBox.offsetWidth;
    // const maxY = window.innerHeight - myBox.offsetHeight;
    // x = Math.max(0, Math.min(x, maxX));
    // y = Math.max(0, Math.min(y, maxY));

    // Update the box's position
    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});