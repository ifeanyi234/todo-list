"use strict";
const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const error = document.querySelector(".error");
const checkBox = document.querySelector("#checkbox");

const task = [];

const addTask = function (taskValue) {
  task.push(taskValue);
};

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!input.value) {
    error.classList.add("active");
    error.textContent = "Field must not be empty";
    return;
  }
  console.log(checkBox.checked);
  console.log(input.value);
});
