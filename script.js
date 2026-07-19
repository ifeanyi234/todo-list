"use strict";
const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const error = document.querySelector(".error");
const listContainer = document.querySelector("#taskList");
const taskCount = document.querySelector("#taskCount");

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

    // Clear the list
    listContainer.innerHTML = "";

    // create element
    tasks.forEach((task) => {
      const newTaskItem = createEl();
      newTaskItem.innerHTML = `<input type="checkbox" />
            <p class="task-text">${task}</p>
            <button class="delete-btn">x</button>
      `;
    });
    // task count
    taskCount.textContent = `${tasks.length} tasks remaining`;

    console.log(tasks);
  }

  // reset
  input.value = "";
});
