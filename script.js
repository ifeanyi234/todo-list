"use strict";
const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const error = document.querySelector(".error");

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
  } else {
    error.classList.remove("active");
    addTask(input.value);
    console.log(task);
  }

  // reset
  input.value = "";
});
