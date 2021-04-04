// Assignment Code
var generateBtn = document.querySelector("#generate");
var numericCharacters = "0123456789";
var symbolCharacters = "!@#$%^&*()_+\/?<>";
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSelected = ["numbericCharacters" + "symbolCharacters" + "lowerCharacters" + "upperCharacters"];


// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword(length) {
    var length = window.prompt("Enter the number of characters for your password?\nPlease choose between 8 to 128 characters.");
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
        }
};

function writePassword() {
    var password = generatPassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    var charTypes = charSelected;
    var charLength = charTypes.length;
    for (var i = 0; i < charTypes.length; i++) {
        result += charTypes(Math.floor(Math.random()*charLength));
    }
}