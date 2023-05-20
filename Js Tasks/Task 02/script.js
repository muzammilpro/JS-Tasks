function findRemainder() {
    var firstValue = parseInt(document.getElementById("firstValue").value);
    var secondValue = parseInt(document.getElementById("secondValue").value);

    if (isNaN(firstValue) || isNaN(secondValue)) {
        document.getElementById("toDisplay").innerHTML = "Please enter valid numeric values.";
        return;
    }

    var result = firstValue - Math.floor(firstValue / secondValue) * secondValue;

    document.getElementById("toDisplay").innerHTML = `Remainder: ${result}`;
}