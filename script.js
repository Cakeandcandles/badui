// This is the word 'username' in the HTML.
let usernameInfo = document.getElementById("username-info");
// This is the word 'password' in the HTML.
let passwordInfo = document.getElementById("password-info");
let userToPword = function () {
	usernameInfo.textContent = "password"; // Changes the word username to password.
  passwordInfo.textContent = "username"; // does the opposite.
};
//let userName = document.getElementById("username").value;
//let passWord = document.getElementById("password").value;

// This is the button by the first input box.
let userButton = document.getElementById("submit-name");
userButton.addEventListener("click", userToPword);
// This is the button by the second input box.
let passButton = document.getElementById("pass-button");

// This shows the error messages under the second input box.
let showPassVal = function() {
	let passLength = document.getElementById("pass-length");
  let passChar = document.getElementById("pass-char");
  let passNum = document.getElementById("pass-num");
  // This saves the inputted value of the password.
  let passWord = document.getElementById("password").value;
  if (passWord.length !== 10) {
  	passLength.innerHTML = "Username must be 10 characters long.";
    } else {
    passLength.innerHTML = "";
    }
  passChar.innerHTML = "Username cannot be easily guessable";
  if (/\d/.test(passWord)) {
  	passNum.innerHTML = "Username cannot have numbers";
  	} else {
    passNum.innerHTML = "";
    }
};

passButton.addEventListener("click", showPassVal);

let showUserVal = function () {
	let userLength = document.getElementById("user-length");
  let userNum = document.getElementById("user-num");
  // This saves the username in this variable.
  let userName = document.getElementById("username").value;
  if (userName.length > 3) {
  	userLength.innerHTML = "Password cannot be more than 3 letters";
  } else {
  	userLength.innerHTML = "";
  }
  if (/\d/.test(userName)) {
  	userNum.innerHTML = "Password cannot have numbers";
  } else {
  	userNum.innerHTML = "";
  }
};

userButton.addEventListener("click", showUserVal);

let submitButton = document.getElementById("submit");
let clickCount = 0;
let moveButton = function() {
	if (submitButton.style.left == "300px") {
  	submitButton.style.left = "35px";
  } else {
	submitButton.style.left = "300px";
  }
  clickCount ++;
  if (clickCount >= 3) {
  	document.body.innerHTML = "<h1 style='font-size: 200px;'>Good boy!</h1>";
  }
};

submitButton.addEventListener("click", moveButton);
