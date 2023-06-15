// """Flashcard App: Create a flashcard app that displays a question and answer pair and allows the user to flip the card to see the answer. You can use an array of objects to store the question and answer pairs and a variable to keep track of the current card being displayed."""

// Array of question and answer pairs
var flashcards = [
  {
    question: "What is the capital of France?",
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter"
  },
  {
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci"
  }
];

// Variable to keep track of the current card
var currentCard = 0;

// Function to display the current question
function displayQuestion() {
  console.log("Question: " + flashcards[currentCard].question);
}

// Function to display the current answer
function displayAnswer() {
  console.log("Answer: " + flashcards[currentCard].answer);
}

// Function to flip the card (toggle between question and answer)
function flipCard() {
  if (currentCard < flashcards.length) {
    if (showingQuestion()) {
      displayAnswer();
    } else {
      displayQuestion();
    }
  }
}

// Function to check if the question is currently showing
function showingQuestion() {
  return console.log("Current card is: " + (currentCard + 1) + " out of " + flashcards.length + " cards.");
}

// Initial display of the first question
displayQuestion();

// Example usage:
flipCard(); // Show the answer
flipCard(); // Show the question again
flipCard(); // Show the answer
showingQuestion(); // Check the current card

