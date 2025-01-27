const inputText = document.getElementById("textBox");
const fahrenheit = document.getElementById("fahrenheit");
const celsius = document.getElementById("celsius");
const result = document.getElementById("result");

function convert() {
    const temp = parseFloat(inputText.value); // Convert input to a number

    if (fahrenheit.checked) {
        // Celsius to Fahrenheit conversion
        const convertedTemp = (temp * 9/5) + 32;
        result.textContent = `${temp}°C is equal to ${convertedTemp.toFixed(2)}°F`;
    } else if (celsius.checked) {
        // Fahrenheit to Celsius conversion
        const convertedTemp = (temp - 32) * 5/9;
        result.textContent = `${temp}°F is equal to ${convertedTemp.toFixed(2)}°C`;
    } else {
        // No unit selected
        result.textContent = "Please select a unit for conversion.";
    }
}
