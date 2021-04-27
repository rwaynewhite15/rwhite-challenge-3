// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var number = "0123456789"
var specialChar = "!@#$%^&*"

var charTypes = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var password = "";
  var passwordLength = prompt("How many characters would you like your password to be?")
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters!")
    return password
  }
  var useLowerCase = confirm("Would you like to use lowercase letters?")
  var useUpperCase = confirm("Would you like to use uppercase letters?")
  var useNumeric = confirm("Would you like to use numbers?")
  var useSpecial = confirm("Would you like to use special characters?")

  if (useLowerCase === true) {
    charTypes.push(lowerCase)
  }
  if (useUpperCase === true) {
    charTypes.push(upperCase)
  }
  if (useNumeric === true) {
    charTypes.push(number)
  }
  if (useSpecial === true) {
    charTypes.push(specialChar)
  }

  /*var random = Math.floor(Math.random() * number.length)
  alert(random)*/


  for (var i = 0; i < passwordLength; i++){
    var charTypePos = Math.floor(Math.random() * charTypes.length)
    var charPos = Math.floor(Math.random() * charTypes[charTypePos].length)
    password = password + charTypes [charTypePos][charPos]
  }


  
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
