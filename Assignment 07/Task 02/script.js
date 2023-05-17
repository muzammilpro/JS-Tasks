function checkPalindrome() {
    var inputString = prompt("Enter a string:");
    
    // Remove non-alphanumeric characters and convert to lowercase
    var cleanedString = inputString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    // Reverse the string
    var reversedString = cleanedString.split("").reverse().join("");
    
    // Check if the original and reversed strings are equal
    if (cleanedString === reversedString) {
      console.log("The input string is a palindrome.");
    } else {
      console.log("The input string is not a palindrome.");
    }
  }
  
  // Call the function to test it
  checkPalindrome();
  