var generatePassword = function() {
    var password = "";

    var charLength = passwordLength();
    if (charLength < 8 || charLength > 128 || charLength === "") {
        alert("Password length must be between 8 to 128 characters!");
        return;
    }

    var charSet = passwordSet();

    var charSetLength = charSet.length;
    console.log(charLength, charSet, charSetLength)

    for (var i = 0; i < charLength; i++) {
       password += charSet.charAt(Math.floor(Math.random()*charSetLength));
    }
    console.log(password)
    return password;
}

var passwordLength = function() {
    var lengthChar = prompt("Enter the length of characters for your password?\nPassword length must be between 8 to 128 characters.");

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
    console.log(password)
    var passwordText = document.getElementById("password");

    passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);

