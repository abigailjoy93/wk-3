// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

let password = "";

let uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

function generatePassword() {
  //only allow approved characters
  let allowedCharacters = "";
  // dictate how long the password is
  const criteriaLength = prompt("How long would you like your password to be?");
  // dictate whether or not lowercase letters are included
  const criteriaLowercase = confirm(
    "Would you like your password to contain lowercase letters?"
  );
  //if yes, then this will add lowercase letters to the allowedCharacters list
  if (criteriaLowercase === true) {
    allowedCharacters += lowercase.join("");
  }
  // will dictate whether or not uppercase letters are included
  const criteriaUppercase = confirm("How about uppercase letters?");
  //if yes, then this will add uppercase letters to the allowedCharacters list
  if (criteriaUppercase === true) {
    allowedCharacters += uppercase.join("");
  }
  // will dictate whether or not numbers are included
  const criteriaNumbers = confirm(
    "Would you like your password to contain numbers?"
  );
  //if yes, then this will add numbers to the allowedCharacters list
  if (criteriaNumbers === true) {
    allowedCharacters += numbers.join("");
  }
  // will dictate whether or not special characters are included
  const criteriaSpecial = confirm(
    "And finally, would you like some special characters in your password?"
  );
  // if yes, this will add special characters to the allowedCharacters list
  if (criteriaSpecial === true) {
    allowedCharacters += special.join("");
  }

  // for statement to actually create the password
  for (var i = 0; i <= criteriaLength; i++) {
    let randomNumber = Math.floor(Math.random() * criteriaLength);
    password += allowedCharacters.substring(randomNumber, randomNumber + 1);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
