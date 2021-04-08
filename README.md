# Password-Generator
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
- using .addEventListener()

WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
- using window.prompt()

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
- used confirm()

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
- the previous steps all worked but just don't show the password, I have tried different ways, but still couldn't get through the last step. The other version I have (JavaScript) is like below:

var password = "";

var generatePassword = function() {
    password = "";

    var charLength = passwordLength();

    var charSet = passwordSet();
    var charSetLength = passwordSet.length;

    for (var i = 0; i < charLength; i++) {
       password += charSet.charAt(Math.floor(Math.random()*charSetLength));
    }
    return password;
}

var passwordLength = function() {
    var lengthChar = prompt("Enter the length of characters for your password?\nPassword length must be between 8 to 128 characters.");
    
    if (lengthChar < 8 || lengthChar > 128 || lengthChar === "") {
        alert("Password length must be between 8 to 128 characters!");
        return passwordLength;
    }

    lengthChar = Math.floor(Number(lengthChar));
    return lengthChar;
}

var passwordSet = function() {
    var charSet = "";

    var numbers = "0123456789";
    var symbols = "!@#$%^&*()_+\/?<>";
    var lowerCases = "abcdefghijklmnopqrstuvwxyz";
    var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var numChar = confirm("Click 'OK' to confirm having numeric characters");
    var symChar = confirm("Click 'OK' to confirm having symbolic characters");
    var lowerChar = confirm("Click 'OK' to confirm having lowercase letters");
    var upperChar = confirm("Click 'OK' to confirm having uppercase letters");
        
    if (numChar === true) {
        charSet += numbers;
    }
    if (symChar === true) {
        charSet += symbols;
    }
    if (lowerChar === true) {
        charSet += lowerCases;
    }
    if (upperChar === true) {
        charSet += upperCases;
    }
    return charSet;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.getElementById("#password");

    passwordText.value = password;
};

generateBtn.addEventListener("click", generatePassword);
