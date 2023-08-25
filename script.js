function convertToCelsius() {
    var celsiusInput = document.getElementById("celsius").value;
    var result = (celsiusInput - 32) * 5/9;
    document.getElementById("result").textContent = "Converted Temperature: " + result.toFixed(2) + " °C";
}
