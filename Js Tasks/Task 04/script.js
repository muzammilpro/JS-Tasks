
var passwordArray =["test", "test@1214", "newPass2422@", "testPassword23","examPle#242"] 

var newPasswordArray = []

for (let index = 0; index < 5; index++) {
  
  var arrayValue = passwordArray[index]
  var lengthChecker = arrayValue.length
  var checkUpperCase = /[A-Z]/.test(arrayValue);
  var checkLowerCase = /[a-z]/.test(arrayValue);
  var checkNumber = /[0-9]/.test(arrayValue);
  var specialCharcter = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(arrayValue);
  
  var valueChecker = true;
  if (lengthChecker < 8) {
    console.log(`<p>The Password has less than 8 Characters.</p>`);
    valueChecker = false
  }
   else if (!checkUpperCase) {
   console.log( `<p>The Password does not has Uppercase letter.</p>`);
   valueChecker = false
 
  }
  else if (!checkLowerCase) {
    console.log( `<p>The Password does not has Lowecase letter.</p>`);
    valueChecker = false
  }
  else if (!checkNumber) {
    console.log(`<p>The Password does not has Number.</p>`);
    valueChecker = false
  }
  else if (!specialCharcter){
    valueChecker = false
  }

  else {
     console.log(`<p>The Password is correct.</p>`);
     valueChecker = true
     
  }
  newPasswordArray.push(valueChecker)
  
}
console.log(newPasswordArray);