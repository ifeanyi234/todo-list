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

const createEl = function () {
  const newEl = document.createElement("li");
  newEl.classList.add("task-item");
  listContainer.appendChild(newEl);
  return newEl;
};

listContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("checkbox")) {
    const index = e.target.dataset.index;
    tasks[index].isChecked = !tasks[index].isChecked;
    console.log(e.target);
  }
});

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
    tasks.forEach((taskObj, index) => {
      const newTaskItem = createEl();
      // newTaskItem.dataset.index = index;
      newTaskItem.innerHTML = `<input type="checkbox" data-index=${index} class="checkbox" ${taskObj.isChecked ? "checked" : ""} />
            <p class="task-text">${taskObj.text}</p>
            <button class="delete-btn">x</button>
      `;
    });

    // task count
    taskCount.textContent = `${tasks.length} tasks remaining`;
    // remove when list not empty
    if (tasks.length) {
      emptyState.style.display = "none";
    }
  }

  // reset
  input.value = "";
});
