"use strict";
const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const error = document.querySelector(".error");
const listContainer = document.querySelector("#taskList");
const taskCount = document.querySelector("#taskCount");
const emptyState = document.querySelector("#emptyState");
const tasks = [];

const addTask = function (taskValue, checked) {
  tasks.push({ text: taskValue, isChecked: false });
};

const updateTaskCount = function () {
  const remaining = tasks.filter((task) => !task.isChecked).length;
  taskCount.textContent = `${remaining} tasks remaining`;
};

const createEl = function () {
  const newEl = document.createElement("li");
  newEl.classList.add("task-item");
  listContainer.appendChild(newEl);
  return newEl;
};

listContainer.addEventListener("click", function (e) {
  const index = e.target.parentElement.dataset.index;
  // complete task
  if (e.target.classList.contains("checkbox")) {
    tasks[index].isChecked = !tasks[index].isChecked;
    e.target.parentElement.classList.toggle("completed");
    // task count
    updateTaskCount();
  }

  // delete task
  if (e.target.classList.contains("delete-btn")) {
    popTask(tasks, index);
    console.log(tasks, index);
    // Clear the list
    listContainer.innerHTML = "";

    // Render list
    renderList();
  }
});

// Deletion
const popTask = function (arr, index) {
  if (index >= 0 && index < arr.length) {
    arr.splice(index, 1);
  }
};

// Render List
const renderList = function () {
  tasks.forEach((taskObj, index) => {
    // create element
    const newTaskItem = createEl();
    newTaskItem.dataset.index = index;
    if (taskObj.isChecked) {
      newTaskItem.classList.toggle("completed");
    }
    newTaskItem.innerHTML = `<input type="checkbox" class="checkbox" ${taskObj.isChecked ? "checked" : ""} />
            <p class="task-text">${taskObj.text}</p>
            <button class="delete-btn">x</button>
      `;
  });

  // task count
  updateTaskCount();
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

    // Render list
    renderList();

    // task count
    // taskCount.textContent = `${tasks.length} tasks remaining`;

    // remove when list not empty
    if (tasks.length) {
      emptyState.style.display = "none";
    }
  }

  // reset
  input.value = "";
});
