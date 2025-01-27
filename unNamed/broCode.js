const pi = 3.1459;
document.getElementById("mySubmit").onclick = function () {
  let radius = document.getElementById("myText").value;
  radius = Number(radius);
  let circum = 2 * pi * radius;
  document.getElementById("myH3").textContent = circum + "cm";
}; 