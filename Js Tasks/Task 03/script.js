function passwordChecker() {

  var inputValue = document.getElementById("input").value
  var lengthChecker = inputValue.length;
  var checkUpperCase = /[A-Z]/.test(inputValue);
  var checkLowerCase = /[a-z]/.test(inputValue);
  var checkNumber = /[0-9]/.test(inputValue);

  if (lengthChecker < 8) {
    document.getElementById("toDisplay").innerHTML = `<p>The Password has less than 8 Characters.</p>`
  }
  else if (!checkUpperCase) {
    document.getElementById("toDisplay").innerHTML = `<p>The Password does not has Uppercase letter.</p>`

  }
  else if (!checkLowerCase) {
    document.getElementById("toDisplay").innerHTML = `<p>The Password does not has Lowecase letter.</p>`

  }
  else if (!checkNumber) {
    document.getElementById("toDisplay").innerHTML = `<p>The Password does not has Number.</p>`

  }

  else {
    document.getElementById("toDisplay").innerHTML = `<p>The Password is correct.</p>`

  }



}