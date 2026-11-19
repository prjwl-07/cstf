regForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const regForm = document.getElementById("regForm");
  const userName = document.getElementById("username").value.trim();
  const nameError = document.getElementById("nameError");
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const age = document.getElementById("age").value.trim();
  const ageError = document.getElementById("ageError");
  const password = document.getElementById("password").value.trim();
  const passwordError = document.getElementById("passwordError");
  const gender = document.getElementById("gender").value;
  const genderError = document.getElementById("genderError");
  const success = document.querySelector("#success");

  nameError.textContent = "";
  if (userName.length == 0) {
    nameError.textContent = "This field is required";
  } else if (userName.length < 4) {
    nameError.textContent =
      "there is a Error in the naming please check the name ones";
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  emailError.textContent = "";
  if (email == "") {
    emailError.textContent = "This field is required";
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "The email is not valid";
  }

  ageError.textContent = "";
  if (age.length == 0) {
    ageError.textContent = "This field is required";
  } else if (age <= 0) {
    ageError.textContent = "Age Cant be Zero or Negative";
  } else if (age < 18) {
    ageError.textContent = "Minimum 18 age is required to signup";
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  passwordError.textContent = "";

  if (password.length == 0) {
    passwordError.textContent = "This field is required";
  } else if (!passwordRegex.test(password)) {
    passwordError.textContent =
      "It requires at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character";
  }

  genderError.textContent = "";
  if (gender == "") {
    genderError.textContent = "This field is required";
  } else if (!(gender == "Male" || gender == "Female")) {
    genderError.textContent = "Invalid option selected";
  }

  success.textContent = "";
  if (
    genderError.textContent == "" &&
    passwordError.textContent == "" &&
    ageError.textContent == "" &&
    emailError.textContent == "" &&
    nameError.textContent == ""
  ) {
    success.textContent = "Form submitted";
  }
});



