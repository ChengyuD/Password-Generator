// Assignment Code
var generateBtn = document.querySelector("#generate");
var numericCharacters = "0123456789";
var symbolCharacters = "!@#$%^&*()_+\/?<>";
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordChar = ["numericCharacters" + "symbolCharacter" + "lowerCharacters" + "upperCharacters"];
var passwordEl = '';

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
    var randomLength = window.prompt("Enter the number of characters for your password?\nPlease choose between 8 and 128 characters.");
    if (randomLength > 7 || randomLength < 129) {
        var numType = confirm("Click 'OK' to confirm having numeric characters");
        var symType = confirm("Click 'OK' to confirm having symbolic characters");
        var lowType = confirm("Click 'OK' to confirm having lowercase letters");
        var upType = confirm("Click 'OK' to confirm having uppercase letters");
        if (numType == true || symType == true || lowType == true || upType == true) {
            if (numType == true) {
                passwordEl += numericCharacters;
            }
            if (symType == true) {
                passwordEl += symbolCharacters;
            }
            if (lowType == true) {
                passwordEl += lowerCharacters;
            }
            if (upType == true) {
                passwordEl += upperCharacters;
            }
        }
    }
}

function writePassword() {
    var password = generatPassword();
    var passwordText = document.querySelector("#password");

    for (i = 0; i < randomLength; i++) {
        var passwordl = parseInt(passwordChar.length*Math.random());
        passwordEl += passwordChar[passwordl];
    }
    return passwordEl;
}