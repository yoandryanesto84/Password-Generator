// Assignment Code
var generateBtn = document.querySelector("#generate");

var numericCharacters =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];

var passWordCriteria = function(){
  var lenght = window.prompt("How long would you like your password?");
  if (lenght <= 7 || lenght >= 129){
    window.alert("Need to be between 8 and 128 characters");
    return;
  }
  var confirmLower = window.confirm("Do you want lowercases in your password");
  var confirmUpper = window.confirm("Do you want Uppercases in your password");
  var confirmNumber = window.confirm("Do you want Number in your password");
  var confirmEspecialCharacther = window.confirm("Do you want EspecialCharacther in your password");
  var userChoise = {
    passwordLength : lenght,
    UpperCase : confirmUpper,
    LowerCase: confirmLower,
    Number: confirmNumber,
    EspecialCharacther: confirmEspecialCharacther,
  }
  console.log (userChoise);
  return userChoise;
}

function randomize(array){
var randonIndex = Math.floor(Math.random() * array.lenght);
var indexValue = array[randonIndex];
return indexValue;
}

function generatePassword(){
  var userAnswer = passWordCriteria();
  var possibleCharacter = [];
  var finalPassword = [];
  if(userAnswer.UpperCase === true){
    possibleCharacter = possibleCharacter.concat(upperCase);
  }
  if(userAnswer.LowerCase === true){
    possibleCharacter = possibleCharacter.concat(lowerCase);
  }
  if(userAnswer.EspecialCharacther === true){
    possibleCharacter = possibleCharacter.concat(specialCharacters);
  }
  if(userAnswer.Number === true){
    possibleCharacter = possibleCharacter.concat(numericCharacters);
  }
  console.log(possibleCharacter );

  for(var i = 0; i < userAnswer.passwordLength; i++){
    var randomCharacter = randomize (possibleCharacter);
    finalPassword.push(randomize (possibleCharacter));
  }
  return finalPassword.join("");
  console.log(finalPassword);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
