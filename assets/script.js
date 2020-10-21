// Assignment Codes
const generateBtn = document.querySelector("#generate");
var include;

// Random Generator Functions 
let useLower = function randomLowerCase() {
  // This will out put letters a-z in lower case fromCharCode.
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(useLower())

let useUpper = function randomUpperCase() {
  // This will out put letters A-Z in upper case fromCharCode.
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(useUpper())

let useNumbers = function randomNumber() {
  // This will out put numbers fromCharCode.
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(useNumbers())

let useSymbols = function randomSymbol() {
  // Using concatenation we have this function pull from the 4 ranges in the character code and then it randomly picks from those 4.
  const randomSym = String.fromCharCode(Math.floor(Math.random() * 15) + 32).concat(
    String.fromCharCode(Math.floor(Math.random() * 7) + 58)
  ).concat(
    String.fromCharCode(Math.floor(Math.random() * 6) + 91)
  ).concat(
    String.fromCharCode(Math.floor(Math.random() * 4) + 123)
  )

  let randomIndex = (Math.floor(Math.random() * randomSym.length))
  return randomSym[randomIndex]
}
console.log(useSymbols())

// The charCode that I am referencing can be found here https://www.w3schools.com/charsets/ref_utf_basic_latin.asp

function generatePassword() {
  // Password Length
    let pwLength = parseInt(prompt('Please choose from 8 to 128 characters.'))
    
    // We will use a if and else if statement to make sure they follow the parameters we give them.
    if (pwLength === "") {
      // If they leave box empty they will be given the alert message and need to click the generate button again.
      alert('This box cannot be empty.')
    }
    else if (pwLength < 8 || pwLength > 128) {
      // If they give us a value that is not between 8 and 128 then they will be asked again.
      pwLength = parseInt(prompt('Please provide a value between 8 and 128.'))
    }
    else {
  // To include lower case or not.
    let includeLower = confirm('Include lower case letters in password?')

  // To include upper case letters or not.
    let includeUpper = confirm('Include upper case letters in password?')
  
  // To include numbers or not.
    let includeNumbers = confirm('Include numbers in password?')

  // To include symbols or not.
    let includeSymbols = confirm('Include symbols in password?')
  };

  // character combinations
  if (!includeLower && !includeUpper && !includeNumbers && !includeSymbols) {
    alert('You must include one of the 4 variables given. Please click "Generate a Password" again.')
  }
  // if only lower case letters are include.
  else if (includeLower && !includeUpper && !includeNumbers && !includeSymbols) {

  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordEL = document.getElementById('password');

  passwordText.value = password;
  password = '';
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  return password[]
}