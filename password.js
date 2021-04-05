// Assignment Code
var generateBtn = document.querySelector("#generate");
var numericCharacters = "0123456789";
var symbolCharacters = "!@#$%^&*()_+\/?<>";
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSelected = "";
var passwordEl = [];

generateBtn.addEventListener("click", generatePassword);

// prompt and confirmation of length and character types after clicking the generate password button
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
    var length = window.prompt("Enter the number of characters for your password?\nPlease choose between 8 and 128 characters.");
    if (length > 7 || length < 129) {
        var numType = confirm("Click 'OK' to confirm having numeric characters");
        var symType = confirm("Click 'OK' to confirm having symbolic characters");
        var lowType = confirm("Click 'OK' to confirm having lowercase letters");
        var upType = confirm("Click 'OK' to confirm having uppercase letters");
        if (numType == true || symType == true || lowType == true || upType == true) {
            if (numType == true) {
                charSelected += numericCharacters;
            }
            if (symType == true) {
                charSelected += symbolCharacters;
            }
            if (lowType == true) {
                charSelected += lowerCharacters;
            }
            if (upType == true) {
                charSelected += upperCharacters;
            }
        }

        for (var i = 0; i < length; i++) {
            password = charSelected + passwordEl[Math.floor(Math.random()*passwordEl.length)];
            console.log(password);
        }
};


function writePassword() {
    var password = generatPassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
};
