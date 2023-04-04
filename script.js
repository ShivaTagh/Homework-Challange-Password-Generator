  // Assignment JavaScript Code
  // Query selectors
  var generateBtn = document.querySelector("#generate");
  var passwordText = document.querySelector("#password");


  // variables Arrays
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var optionsVariable = "";

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  // Write a function that generates a random password in the page
  function writePassword() {
    var randomString = "";
    passwordText.value = password;

  // Ask the user for which characters to include
  var lowercase = confirm("Do you want your password to contain lowercase?");
  var uppercase = confirm("Do you want your password to contain uppercase?");
  var num = confirm("Do you want your password to contain numbers?");
  var specialChar = confirm("Do you want your password to contain special characters?");
  var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

  // Check for the length of the password
  if (passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
    alert("Your password is not between 8 characters and 128 characters. Please try again.");
  }

  // Ensure that if someone clicks cancel for all password criteria that it asks them to choose at least one
  else if (!lowercase && !uppercase && !num && !specialChar) {
    alert("Error, invalid character type.\nPlease include at least one type of character.");
    var lowercase = confirm("Do you want your password to contain lowercase?");
    var uppercase = confirm("Do you want your password to contain uppercase?");
    var num = confirm("Do you want your password to contain numbers?");
    var specialChar = confirm("Do you want your password to contain special characters?");
  }

  // Use the criteria that are selected to generate the password
  if (lowercase) {
    optionsVariable += lowercaseAlphabet;
  }

  if (uppercase) {
    optionsVariable += uppercaseAlphabet;
  }

  if (num) {
    optionsVariable += numbers;
  }

  if (specialChar) {
    optionsVariable += specialCharacters;
  }

  // Generates a random password based on the criteria that have been selected
  for (var i = 0; i < passwordLength; i++) {
  // Continues to select a random character value from the string until it is the desired length
    randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
  }
    passwordText.value = randomString;
    var password = generatePassword();
  }

