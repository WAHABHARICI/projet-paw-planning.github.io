const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
// script.js
const showFormButton = document.getElementById("show-login");
const signUpForm = document.getElementById("login");

showFormButton.addEventListener("click", function () {
  signUpForm.classList.toggle("hidden");
});
