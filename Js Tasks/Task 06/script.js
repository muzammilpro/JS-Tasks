// User input
// name - should be include first and last name 
// email - should be include valid 
// emailcountrycode - should be exactly 'PK'
// state - should be in punjab , SVGAnimatedLengthbio - should be more than 50 Characters
//  cnic  - should be exactly 13 characters


let userData = [];

function formValidation() {
  var userNameArray = [];
  var userName = document.getElementById("userName").value;
  var userEmail = document.getElementById("userEmail").value;
  var userCountryCode = document.getElementById("userCountryCode").value;
  var UserState = document.getElementById("UserState").value;
  var userBio = document.getElementById("userBio").value;
  var UserCnic = document.getElementById("UserCnic").value;

  if (!userName.includes(" ")) {
    console.log("Name should include both first and last name.");
  }

  if (!userEmail.includes("@") || !userEmail.includes(".")) {
    console.log("Email should be valid.");
  }

  if (userCountryCode !== "PK") {
    console.log("Country Code should be 'PK'.");
  }

  if (UserState !== "punjab" && UserState !== "sindh") {
    console.log("User State is invalid.");
  }

  if (userBio.length < 50) {
    console.log("User Bio should be at least 50 characters long.");
  }
}
