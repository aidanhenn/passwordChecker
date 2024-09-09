const passwordInput = document.getElementById("passwordInput");
const checkPasswordInput = document.getElementById("checkPasswordInput");
const passwordToggleIcon = document.getElementById("password-toggle-icon");
const passwordToggleIcon2 = document.getElementById("password-toggle-icon2");
const container2 = document.getElementById("container2");
const submitButton = document.getElementById("submit-btn");
const symbolPattern = /[!@#$%^&*(),.?":{}|<>]/;

// Check if the password is valid
passwordInput.addEventListener("input", function (e) {
  passwordInput.classList.remove("error", "no-error");

  if (
    passwordInput.value.length < 8 ||
    !symbolPattern.test(passwordInput.value)
  ) {
    passwordInput.classList.add("error");
    passwordInput.classList.remove("no-error");
    container2.classList.add("hide");
  } else {
    passwordInput.classList.add("no-error");
    container2.classList.remove("hide");
  }
});

checkPasswordInput.addEventListener("input", function (e) {
  if (checkPasswordInput.value !== passwordInput.value) {
    passwordInput.classList.add("error");
    passwordInput.classList.remove("no-error");

    checkPasswordInput.classList.add("error");
    checkPasswordInput.classList.remove("no-error");
    submitButton.classList.add("hide");
  } else {
    checkPasswordInput.classList.add("no-error");
    passwordInput.classList.add("no-error");
    submitButton.classList.remove("hide");
  }
});

// Show the password when eye icon is clicked
passwordToggleIcon.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});

passwordToggleIcon2.addEventListener("click", function () {
  if (checkPasswordInput.type === "password") {
    checkPasswordInput.type = "text";
  } else {
    checkPasswordInput.type = "password";
  }
});
