function passwordChecker() {
    var minLength = 8
    var inputValue = document.getElementById("inputPassword").value
    var inputLength = inputValue.length
    var checkUpperCase = /[A-Z]/.test(inputValue)
    var checkLowerCase = /[a-z]/.test(inputValue)
    var checkNumber = /[0-9]/.test(inputValue)

    var strengthChecker = 0

    if (inputLength >= minLength)
        strengthChecker += 1
    if (checkUpperCase)
        strengthChecker += 1
    if (checkLowerCase)
        strengthChecker += 1
    if (checkNumber)
        strengthChecker += 1

    var strengthRating;
    switch (strengthChecker) {
        case 0:
            strengthRating = "Weak"
            break;
        case 1:
            strengthRating = "medium"
            break;
        case 2:
            strengthRating = "stronge"
            break;
        case 3:
            strengthRating = "Very Stronge"
            break;

    }

    document.getElementById("toDisplay").innerHTML = `<p>Strength is ${strengthRating} </p>`

}