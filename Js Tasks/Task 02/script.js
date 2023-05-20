var firstValue = document.getElementById("firstValue").value;
var secondValue = document.getElementById("secondvalue").value;

function findRemainder(){
   
    var result= parseInt(firstValue/secondValue)
    var product = secondValue * result;
    var subtractValue = firstValue-product;

  
    
    document.getElementById("toDisplay").innerHTML = (`${subtractValue}`)



}