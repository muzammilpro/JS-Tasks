
function checkPassword() {
    var inputText = document.getElementById("inputPassword").value;
    var strengthChecker = inputText.length;
    document.getElementById("toDisplay").innerHTML = `<p>Length is ${strengthChecker}</p>`;
}

