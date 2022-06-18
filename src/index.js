document.addEventListener("DOMContentLoaded", () => {
  let inputForm = document.getElementById("create-task-form");
  inputForm.addEventListener("submit", createNovelTask);
});

const createNovelTask = function (event) {
  event.preventDefault();
  let newTaskList = document.getElementById("tasks");
  let novelTask = document.createElement("li");
  //appending new text to the created list
  let novelTaskDescription = document.getElementById("new-task-description");
  novelTask.innerText = novelTaskDescription.value;
  console.log(novelTask);
  appendNovelTask(novelTask);
  event.target.reset();
};
const erase = (event) => {
  event.target.ul.remove();
};

const appendNovelTask = (task) => {
  document.getElementById("tasks").appendChild(task);
};