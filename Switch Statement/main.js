const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const submitBtn = document.getElementById("submit");
const result = document.getElementById("result");

submitBtn.onclick =() => {
  if (monday.checked) {
    result.textContent = 'Monday';
  } else if (tuesday.checked) {
    result.textContent = 'Tuesday';
  } else {
    result.textContent = 'Please select a day.';
  }
};
