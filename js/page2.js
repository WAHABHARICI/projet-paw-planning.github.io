// first forme

document.querySelector(".submit-1").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("test");
  const mealname = document.querySelector(".name-input-1").value;
  console.log(mealname);
  const serving = document.querySelector(".Number-serving-1").value;
  const time = document.querySelector(".cooking-time-1").value;
  if (document.querySelector(".dish-type-1").value === "lunch") {
    document.querySelector(".lunch-1").textContent = mealname;
    document.querySelector(".time-lunch-1").textContent = time;
    document.querySelector(".person-lunch-1").textContent = serving;
  } else if (document.querySelector(".dish-type-1").value === "dinner") {
    document.querySelector(".dinner-1").textContent = mealname;
    document.querySelector(".time-dinner-1").textContent = time;
    document.querySelector(".person-dinner-1").textContent = serving;
  } else {
    document.querySelector(".dessert-1").textContent = mealname;
    document.querySelector(".time-dessert-1").textContent = time;
  }
  document.querySelector(".overlay").classList.add("hidding");
  document.querySelector(".form-1").classList.add("hidding");
});

document.querySelector(".add-meal-1 ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("hidding");
  document.querySelector(".form-1").classList.remove("hidding");
});
document.querySelector(".edite-1 ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("hidding");
  document.querySelector(".form-1").classList.remove("hidding");
});
document.querySelector(".overlay ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.add("hidding");
  document.querySelector(".form-1").classList.add("hidding");
});
// second-form
document.querySelector(".submit-2").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("test");
  const mealname_2 = document.querySelector(".name-input-2").value;

  const serving_2 = document.querySelector(".Number-serving-2").value;
  const time_2 = document.querySelector(".cooking-time-2").value;
  if (document.querySelector(".dish-type-2").value === "lunch") {
    document.querySelector(".lunch-2").textContent = mealname_2;
    document.querySelector(".time-lunch-2").textContent = time_2;
    document.querySelector(".person-lunch-2").textContent = serving_2;
  } else if (document.querySelector(".dish-type-2").value === "dinner") {
    document.querySelector(".dinner-2").textContent = mealname_2;
    document.querySelector(".time-dinner-2").textContent = time_2;
    document.querySelector(".person-dinner-2").textContent = serving_2;
  } else {
    document.querySelector(".dessert-2").textContent = mealname_2;
    document.querySelector(".time-dessert-2").textContent = time_2;
  }
  document.querySelector(".overlay").classList.add("hidding");
  document.querySelector(".form-2").classList.add("hidding");
});

document.querySelector(".add-meal-2 ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("hidding");
  document.querySelector(".form-2").classList.remove("hidding");
});
document.querySelector(".edite-2 ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("hidding");
  document.querySelector(".form-2").classList.remove("hidding");
});
document.querySelector(".overlay ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.add("hidding");
  document.querySelector(".form-2").classList.add("hidding");
});

// third-form
document.querySelector(".submit-3").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("test");
  const mealname_3 = document.querySelector(".name-input-3").value;

  const serving_3 = document.querySelector(".Number-serving-3").value;
  const time_3 = document.querySelector(".cooking-time-3").value;
  if (document.querySelector(".dish-type-3").value === "lunch") {
    document.querySelector(".lunch-3").textContent = mealname_3;
    document.querySelector(".time-lunch-3").textContent = time_3;
    document.querySelector(".person-lunch-3").textContent = serving_3;
  } else if (document.querySelector(".dish-type-3").value === "dinner") {
    document.querySelector(".dinner-3").textContent = mealname_2;
    document.querySelector(".time-dinner-3").textContent = time_2;
    document.querySelector(".person-dinner-3").textContent = serving_2;
  } else {
    document.querySelector(".dessert-3").textContent = mealname_2;
    document.querySelector(".time-dessert-3").textContent = time_2;
  }
  document.querySelector(".overlay").classList.add("hidding");
  document.querySelector(".form-3").classList.add("hidding");
});

document.querySelector(".add-meal-3 ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("hidding");
  document.querySelector(".form-3").classList.remove("hidding");
});
document.querySelector(".edite-3 ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("hidding");
  document.querySelector(".form-3").classList.remove("hidding");
});
document.querySelector(".overlay ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.add("hidding");
  document.querySelector(".form-3").classList.add("hidding");
});

// fourth-form
document.querySelector(".submit-4").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("test");
  const mealname_4 = document.querySelector(".name-input-4").value;

  const serving_4 = document.querySelector(".Number-serving-4").value;
  const time_4 = document.querySelector(".cooking-time-4").value;
  if (document.querySelector(".dish-type-4").value === "lunch") {
    document.querySelector(".lunch-4").textContent = mealname_4;
    document.querySelector(".time-lunch-4").textContent = time_4;
    document.querySelector(".person-lunch-4").textContent = serving_4;
  } else if (document.querySelector(".dish-type-4").value === "dinner") {
    document.querySelector(".dinner-4").textContent = mealname_4;
    document.querySelector(".time-dinner-4").textContent = time_4;
    document.querySelector(".person-dinner-4").textContent = serving_4;
  } else {
    document.querySelector(".dessert-4").textContent = mealname_4;
    document.querySelector(".time-dessert-4").textContent = time_4;
  }
  document.querySelector(".overlay").classList.add("hidding");
  document.querySelector(".form-4").classList.add("hidding");
});

document.querySelector(".add-meal-4 ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("hidding");
  document.querySelector(".form-4").classList.remove("hidding");
});
document.querySelector(".edite-4 ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("hidding");
  document.querySelector(".form-4").classList.remove("hidding");
});
document.querySelector(".overlay ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.add("hidding");
  document.querySelector(".form-4").classList.add("hidding");
});

// fifth-form
document.querySelector(".submit-5").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("test");
  const mealname_5 = document.querySelector(".name-input-5").value;

  const serving_5 = document.querySelector(".Number-serving-5").value;
  const time_5 = document.querySelector(".cooking-time-5").value;
  if (document.querySelector(".dish-type-5").value === "lunch") {
    document.querySelector(".lunch-5").textContent = mealname_5;
    document.querySelector(".time-lunch-5").textContent = time_5;
    document.querySelector(".person-lunch-5").textContent = serving_5;
  } else if (document.querySelector(".dish-type-5").value === "dinner") {
    document.querySelector(".dinner-5").textContent = mealname_5;
    document.querySelector(".time-dinner-5").textContent = time_5;
    document.querySelector(".person-dinner-5").textContent = serving_5;
  } else {
    document.querySelector(".dessert-5").textContent = mealname_5;
    document.querySelector(".time-dessert-5").textContent = time_5;
  }
  document.querySelector(".overlay").classList.add("hidding");
  document.querySelector(".form-5").classList.add("hidding");
});

document.querySelector(".add-meal-5 ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("hidding");
  document.querySelector(".form-5").classList.remove("hidding");
});
document.querySelector(".edite-5 ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("hidding");
  document.querySelector(".form-5").classList.remove("hidding");
});
document.querySelector(".overlay ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.add("hidding");
  document.querySelector(".form-5").classList.add("hidding");
});
// sixth form
document.querySelector(".submit-6").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("test");
  const mealname_6 = document.querySelector(".name-input-6").value;

  const serving_6 = document.querySelector(".Number-serving-6").value;
  const time_6 = document.querySelector(".cooking-time-6").value;
  if (document.querySelector(".dish-type-6").value === "lunch") {
    document.querySelector(".lunch-6").textContent = mealname_6;
    document.querySelector(".time-lunch-6").textContent = time_6;
    document.querySelector(".person-lunch-6").textContent = serving_6;
  } else if (document.querySelector(".dish-type-6").value === "dinner") {
    document.querySelector(".dinner-6").textContent = mealname_6;
    document.querySelector(".time-dinner-6").textContent = time_6;
    document.querySelector(".person-dinner-6").textContent = serving_6;
  } else {
    document.querySelector(".dessert-6").textContent = mealname_6;
    document.querySelector(".time-dessert-6").textContent = time_6;
  }
  document.querySelector(".overlay").classList.add("hidding");
  document.querySelector(".form-6").classList.add("hidding");
});

document.querySelector(".add-meal-6 ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("hidding");
  document.querySelector(".form-6").classList.remove("hidding");
});
document.querySelector(".edite-6 ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("hidding");
  document.querySelector(".form-6").classList.remove("hidding");
});
document.querySelector(".overlay ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.add("hidding");
  document.querySelector(".form-6").classList.add("hidding");
});
// last form
document.querySelector(".submit-7").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("test");
  const mealname_7 = document.querySelector(".name-input-7").value;

  const serving_7 = document.querySelector(".Number-serving-7").value;
  const time_7 = document.querySelector(".cooking-time-7").value;
  if (document.querySelector(".dish-type-7").value === "lunch") {
    document.querySelector(".lunch-7").textContent = mealname_7;
    document.querySelector(".time-lunch-7").textContent = time_7;
    document.querySelector(".person-lunch-7").textContent = serving_7;
  } else if (document.querySelector(".dish-type-7").value === "dinner") {
    document.querySelector(".dinner-7").textContent = mealname_7;
    document.querySelector(".time-dinner-7").textContent = time_7;
    document.querySelector(".person-dinner-7").textContent = serving_7;
  } else {
    document.querySelector(".dessert-7").textContent = mealname_7;
    document.querySelector(".time-dessert-7").textContent = time_7;
  }
  document.querySelector(".overlay").classList.add("hidding");
  document.querySelector(".form-7").classList.add("hidding");
});

document.querySelector(".add-meal-7").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("hidding");
  document.querySelector(".form-7").classList.remove("hidding");
});
document.querySelector(".edite-7 ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("hidding");
  document.querySelector(".form-7").classList.remove("hidding");
});
document.querySelector(".overlay ").addEventListener("click", function () {
  document.querySelector(".overlay").classList.add("hidding");
  document.querySelector(".form-7").classList.add("hidding");
});
