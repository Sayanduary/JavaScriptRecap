// Create New Element
const newH1 = document.createElement("h1");


// Add Atributes and Properties
newH1.textContent = "I Like Pixxa"
newH1.id = "myH1";
newH1.style.color = "tomato"
newH1.style.textAlign = "center"


// Append element to the dom

// document.body.append(newH1);
//document.body.prepend(newH1);

document.getElementById("box1").append(newH1);

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);