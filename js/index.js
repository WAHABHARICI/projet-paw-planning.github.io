const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const loginpage = document.querySelector(".loginpage");
const loginBtn1 = document.getElementById("login1");
// loginBtn.addEventListener("click", function () {
//   container.classList.add("active");
//   console.log("test");
// });
// registerBtn.addEventListener("click", function () {
//   container.classList.remove("active");
// });

registerBtn.addEventListener("click", () => {
  container.classList.toggle("active");
});
loginBtn1.addEventListener("click", function () {
  container.classList.toggle("active");
});

loginpage.addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("hidding");
  document.querySelector(".affiche").classList.remove("hidding");
});
document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".overlay").classList.add("hidding");
  document.querySelector(".affiche").classList.add("hidding");
});

// loginBtn.addEventListener("click", function () {
//   container.classList.remove("active");
// });
// loginBtn.addEventListener("click", () => {
//   container.classList.toggle("active");
//   console.log("working");
// });

// script.js
// const showFormButton = document.getElementById("show-login");
// const signUpForm = document.getElementById("login");

// showFormButton.addEventListener("click", function () {
//   signUpForm.classList.toggle("hidden");
// });
// Document.querySelector(".submit").addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("test");
//   const mealname = Document.getElementById("name-input-1");
//   document.querySelector(".meal-4").textContent = mealname;
// });
