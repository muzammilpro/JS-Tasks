var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

function checkGuess() {
    var guessInput = document.getElementById("guessInput");
    var guess = parseInt(guessInput.value);
    attempts++;

    var resultMessage = document.getElementById("resultMessage");
    var attemptsCount = document.getElementById("attemptsCount");

    if (isNaN(guess)) {
        resultMessage.textContent = "Please enter a valid number.";
        return;
    }

    if (guess === randomNumber) {
        resultMessage.textContent = "Congratulations! You guessed the correct number.";
        attemptsCount.textContent = "Number of attempts: " + attempts;
    } else if (guess < randomNumber) {
        resultMessage.textContent = "Too low. Try again!";
    } else {
        resultMessage.textContent = "Too high. Try again!";
    }

    guessInput.value = "";
}