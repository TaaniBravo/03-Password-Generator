// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generator Functions - these are going to help us create the passwords by having these functions pull from a random number and associating it with the correct string on the Character Code. 
function randomLowerCase() {
  // Here I have the function returning us a random string from the CharCode from 97 up to 122. This will out put letters a-z in lower case.
  return String.fromCharCode(Math.floor(Math.random()) * 26 + 97);
}

function randomUpperCase() {
  // Here I have the function returning us a random string from the CharCode from 65 up to 90. This will out put letters A-Z in upper case.
  return String.fromCharCode(Math.floor(Math.random()) * 26 + 65);
}

function randomNumber() {
  // Like the others this function pulls out a random number from the CharCode provided.
  return String.fromCharCode(Math.floor(Math.random()) * 10 + 48);
}

function randomSymbol() {
  // The hardest one. We needed to use concatenations so we could bring multiple strings together because in the char code the symbols are broken up into 4 different decoder ranges.
  return String.fromCharCode(Math.floor(Math.random()) * 15 + 32).concat(
    String.fromCharCode(Math.floor(Math.random()) * 7 + 58)
  ).concat(
    String.fromCharCode(Math.floor(Math.random()) * 6 + 91)
  ).concat(
    String.fromCharCode(Math.floor(Math.random()) * 4 + 123)
  )
}

// The charCode that I am referencing can be found here https://www.w3schools.com/charsets/ref_utf_basic_latin.asp

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordEL = document.getElementById('password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols)); {
  console.log(generatePassword())
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password

  function characterAmount() {
    var pwLength = parseInt(prompt('Please choose from 8 to 128 characters.'))
    // We will use a if and else if statement to make sure they follow the parameters we give them.
    if (pwLength === "") {
      alert('This box cannot be empty.')
    }
    else if (pwLength < 8 || pwLength >128) {
      alert('This prompt needs a value between 8 and 128.')
    }
  }
  function includeUpperCase() {
    confirm('Include Uppercase?')
  }
  function includeNumbers() {
    confirm('Include Numbers?')
  }
  function includeSymbols() {
    confirm('Include Symbols?')
  }
}
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page