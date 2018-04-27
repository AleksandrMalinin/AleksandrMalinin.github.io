"use strict";

var ENTER_KEY_CODE = 13;

var inputReturn = document.getElementById("return-date");
var checkbox = document.getElementById("roundtrip");
var label = document.querySelector(".form__checkbox-label");
var labelDate = document.querySelector(".form__label--date");
var menuToggle = document.querySelector(".main-nav__toggle");
var menuList = document.querySelector(".main-nav__list");
var buttonChange = document.querySelector(".form__button-change");
var departure = document.getElementById("departure-city");
var arrival = document.getElementById("arrival-city");
var change;

label.addEventListener("click", function () {
  inputReturn.classList.toggle("form__input--return");
  labelDate.classList.toggle("form__label--calendar");
  if (inputReturn.classList.contains("form__input--return")) {
    inputReturn.disabled = "true";
  } else {
    inputReturn.removeAttribute("disabled");
  }
});

label.addEventListener("keydown", function (evt) {
  if (evt.keyCode === ENTER_KEY_CODE) {
    console.log("meow");
    inputReturn.classList.toggle("form__input--return");
    labelDate.classList.toggle("form__label--calendar");
    if (inputReturn.classList.contains("form__input--return")) {
      checkbox.setAttribute("checked", true);
      inputReturn.disabled = "true";
    } else {
      checkbox.removeAttribute("checked");
      inputReturn.removeAttribute("disabled");
    }
  }
});

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("main-nav__toggle--active");
  menuList.classList.toggle("main-nav__list--opened");
});

buttonChange.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  change = arrival.value;
  arrival.value = departure.value;
  departure.value = change;
});
