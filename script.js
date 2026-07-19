"use strict";
const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const error = document.querySelector(".error");
const listContainer = document.querySelector("#taskList");

const tasks = [];

const addTask = function (taskValue) {
  tasks.push(taskValue);
};

const createEl = function () {
  const newEl = document.createElement("li");
  newEl.classList.add("task-item");
  listContainer.appendChild(newEl);
  return newEl;
};
const addClass = function (el, className) {};
const append = function (parentEl, el) {};

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!input.value) {
    error.classList.add("active");
    error.textContent = "Field must not be empty";
    return;
  } else {
    error.classList.remove("active");

    // add task
    addTask(input.value);

    listContainer.innerHTML = "";

    tasks.forEach((task, _, arr) => {
      // create element
      const newTaskItem = createEl();
      newTaskItem.textContent = task;
    });

    console.log(tasks);
  }

  // reset
  input.value = "";
});
