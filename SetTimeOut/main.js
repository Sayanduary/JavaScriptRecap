
let timeOutId;
function startTimer() {
  timeOutId = setTimeout(() => window.alert("Hello"), 3000);
  console.log("Starter");
  return timeOutId;

}

function clearTimer() {
  clearTimeout(timeOutId);
  console.log("CLEAR");

}