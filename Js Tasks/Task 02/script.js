function findRemainder() {
    var firstValue = parseInt(document.getElementById("firstValue").value);
    var secondValue = parseInt(document.getElementById("secondValue").value);

   
  var process1 = parseInt( firstValue / secondValue);
  var process2 = process1 * secondValue;
  var result  = firstValue - process2;


    document.getElementById("toDisplay").innerHTML = `Remainder: ${result}`;
}