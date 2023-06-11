// User input
// name - should be include first and last name 
// email - should be include valid 
// emailcountrycode - should be exactly 'PK'
// state - should be in punjab , SVGAnimatedLengthbio - should be more than 50 Characters
//  cnic  - should be exactly 13 characters

let userData = []

function formValidation(){
  var isValid = false 
  var userNameArray = []
  var userName = document.getElementById("userName").value
  var userEmail = document.getElementById("userEmail").value
  var userCountryCode =  document.getElementById("userCountryCode").value
  var UserState = document.getElementById("UserState").value
  var userBio = document.getElementById("userBio").value
  var UserCnic = document.getElementById("UserCnic").value

  if (!userName.includes(" ")) {
    isValid = false;
    console.log("Name should include both first and last name.");

if (!userEmail.includes("@") || !userEmail.includes(".")) {
  isValid = false;
  console.log("Email should be valid.");
}



  

}