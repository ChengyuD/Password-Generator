// Assignment Code
var generateBtn = document.querySelector("#generate");
var numericCharacters = "0123456789";
var symbolCharacters = "!@#$%^&*()_+\/?<>";
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


// Write password to the #password input
function writePassword(length) {
  var length = window.prompt("Enter the counts of characters for your password?\nPlease choose between 8 to 128 characters.");
  if (length < 8) {
    alert("Must be at least 8 characters");
    return;
  } else if (length > 128) {
    alert("Must not have more than 128 characters");
    return;
  } else {
    var charType1 = confirm("Must have at least one number.");
    if (confirm ("Press OK to Confirm")) {
      text = "You pressed OK!";
    } else {
      text = "You pressed Cancel";
      return;
    }
  } var charType2 = confirm("Must have at least one symbol.");
  if (confirm ("Press OK to Confirm")) {
    text = "You pressed OK!";
  } else {
    text = "You pressed Cancel";
    return;
  } var charType3 = confirm("Must have at least one lowercase letter.");
  if (confirm ("Press OK to Confirm")) {
    text = "You pressed OK!";
  } else {
    text = "You pressed Cancel";
    return;
  } var charType3 = confirm("Must have at least one uppercase letter.");
  if (confirm ("Press OK to Confirm")) {
    text = "You pressed OK!";
  } else {
    text = "You pressed Cancel";
    return;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#generate");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
