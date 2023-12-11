// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers
var uppercase
var lowercase
var noDuplicates
var symbols



// Write password to the #password input
function writePassword(length, numbers, uppercase, 
lowercase, symbols, 
noDuplicates) {
  let characters = '';


if(numbers) {
  characters += '0123456789'
}

if(uppercase) {
  characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}

if(lowercase) {
  characters += 'abcdefghijklmnnopqrstuvwxyz'
}

if(symbols) {
  characters += '!@#$%^&*'
}

let passwordArray = [];

while(passwordArray.length < length) {
  const character = characters[Math.floor(Math.random() * 8)]
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  var password = writePassword((length),
  numbers, uppercase, lowercase, symbols, 
  noDuplicates);
  var passwordText = document.querySelector("#password");


//Couldn't get further then this...

