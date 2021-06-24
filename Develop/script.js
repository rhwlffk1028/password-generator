

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  function generatePassword() {
    var choi = "Hello12345";
    return choi;
  };

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// First prompt 
var userNumChar = prompt("How many characters would you like your password to contain?");
console.log(userNumChar);

if (userNumChar < 8) {
  alert("The number of characters must be at least 8.");
} else if (userNumChar > 128) {
  alert("The number of characters must not exceed 128.");
} else {  
  var criteriaCheck = ["special characters", "numeric characters", "lowercase letters", "uppercase letters"];
  for (i = 0; i < criteriaCheck.length; i++) {
    if (criteriaCheck[i]) {
      var criteriaCheckMessage = confirm("Would you like to add " + criteriaCheck[i] + "?");
      if (criteriaCheck[i]) {
        criteriaCheck[i] = true;
      } else {
        criteriaCheck[i] = false;
      }
    }  
  };  
};

// x = criteriaCheck[4].value;
// console.log(x);

if (criteriaCheck[0] === false && criteriaCheck[1] === false &&
    criteriaCheck[2] === false && criteriaCheck[3] === false) {
  
  alert("There must be at least one character type selected to proceed.");
}

console.log(criteriaCheck.value);


var specialCharacter = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
console.log(specialCharacter.substr(Math.floor(specialCharacter.length*Math.random()),1));

var numericCharacter = "0123456789";
console.log(numericCharacter.substr(Math.floor(numericCharacter.length*Math.random()),1));

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
console.log(lowerCase.substr(Math.floor(lowerCase.length*Math.random()),1));

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(upperCase.substr(Math.floor(upperCase.length*Math.random()),1));


