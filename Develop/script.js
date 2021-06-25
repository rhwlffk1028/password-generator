// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Creates prompts and generate randomPassword based on user's input
function generatePassword() {  
  // Creating variables for the list of special, numeric characters and lowercase, uppercase letters in strings
  var specialCharacter = "!#$%&()*+,-:;<=>?@[]^_{|}~";
  var numericCharacter = "0123456789";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Creating an empty string to act as a placeholder, such that the characters that passed the criteria can be stored here
  var criteriaPassedCharacters = "";
  
  // Asks user how many characters to create for the password
  var userNumChar = prompt("How many characters would you like your password to contain?");

  // If user input is less than 8 and greater than 128, then alert people with the message saying the input must be in between 8 and 128, inclusive
  if (userNumChar < 8 && userNumChar > 128) {
    alert("The number of characters must be greater than or eaual to 8 and less than or equal to 128.");
  } 
    // If user choses the number in between 8 and 128, inclusive, then ask 4 different criteria (yes/no) for the password
    // concat() allows to join multiple strings into one string
    else {
    var specialCharYes = confirm("Would you like to include special characters?");
    if (specialCharYes){
      specialCharYes = true;
      criteriaPassedCharacters = criteriaPassedCharacters.concat(specialCharacter);
    } else {
      specialCharYes = false;
    }
    var numericCharYes = confirm("Would you like to include numeric characters?");
    if (numericCharYes){
      numericCharYes = true;
      criteriaPassedCharacters = criteriaPassedCharacters.concat(numericCharacter);
    } else {
      numericCharYes = false;
    }
    var lowercaseCharYes = confirm("Would you like to include lowercase letter?");
    if (lowercaseCharYes){
      lowercaseCharYes = true;
      criteriaPassedCharacters = criteriaPassedCharacters.concat(lowerCase);
    } else {
      lowercaseCharYes = false;
    }
    var uppercaseCharYes = confirm("Would you like to include uppercase letter?");
    if (uppercaseCharYes){
      uppercaseCharYes = true;
      criteriaPassedCharacters = criteriaPassedCharacters.concat(upperCase);
    } else {
      uppercaseCharYes = false;
    }
  }

  // Message notifies users that at least one criteria must be selected to proceed
  if (specialCharYes === false && numericCharYes === false &&
      lowercaseCharYes === false && uppercaseCharYes === false) {
    
    alert("There must be at least one character type selected to proceed.");
  }

  // Creating an empty string to act as a placeholder, such that the ramdomly pulled characters from the cirteriaPassedCharacters can be stored here
  var randomPassword = "";

  // Going through the for loop and it generates a random character for 'userNumCar' times and store the characters inside the empty string, randomPassWord
  for (let i = 0; i < parseInt(userNumChar); i++) {
    randomPick = Math.floor(Math.random()*criteriaPassedCharacters.length);
    randomPassword = randomPassword.concat(criteriaPassedCharacters.charAt(randomPick)); 
  }

  // Return the randomPassword based on user's input/request
  return randomPassword;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


