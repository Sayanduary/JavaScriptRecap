const checkBox = document.getElementById("myCheckBox")
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submitBtn.onclick = function () {
  if (checkBox.checked) {
    result.textContent = `You are Subscribed!`
  } else {
    result.textContent = `You are Not Subscribed!`
  }
  if (visaBtn.checked) {
    paymentResult.textContent = `You are paying with Visa`;
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = `You are paying with Master Card`;
  } else if (payPalBtn.checked) {
    paymentResult.textContent = `You are paying with Paypal`;
  }
}