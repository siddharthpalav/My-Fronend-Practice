console.log("welcome to do");

let todos = [];
let todoDataSection = document.getElementById("todo-data");
let todoDataList = document.getElementById("todo-data-list");
let saveButton = document.getElementById("save-todo");
let todoInputBar = document.getElementById("todo-input-bar");

todoInputBar.addEventListener("keyup", function togggleSaveButton() {
  let todotext = todoInputBar.value;
  if (todotext.length == 0) {
    if (saveButton.classList.contains("disabled")) return;
    saveButton.classList.add("disabled");
  } else if (saveButton.classList.contains("disabled")) {
    saveButton.classList.remove("disabled");
  }
  // saveButton.classList.remove("disabled");
});

saveButton.addEventListener("click", function getTextAndAddTodo() {
  let todotext = todoInputBar.value;
  if (todotext.length == 0) return;
  // todos.push(todotext);
  let todo = {
    text: todotext,
    status: "In Progress",
    finishButtontext: "Finished",
  };
  todos.push(todo);
  addTodo(todo, todos.length);
  todoInputBar.value = "";
});

function reRenderTodos() {
  todoDataList.innerHTML = "";
  todos.forEach((element, index) => {
    addTodo(element, index + 1);
  });
}

function removeTodo(event) {
  // console.log(event.target.parentElement.parentElement.parentElement);
  // event.target.parentElement.parentElement.parentElement.remove();
  let deleteButtonPressed = event.target;
  let indexTobeRemoved = Number(deleteButtonPressed.getAttribute("todo-idx"));
  todos.splice(indexTobeRemoved, 1);
  // todoDataList.innerHTML = "";
  // todos.forEach((element, index) => {
  //   addTodo(element, index + 1);
  // });
  reRenderTodos();
}

function finishTodo(event) {
  let finishedButtonPressed = event.target;
  let indexToBeFinished = Number(
    finishedButtonPressed.getAttribute("todo-idx")
  );

  // console.log("todos => ", todos);
  // toggle
  if (todos[indexToBeFinished].status == "Finished") {
    todos[indexToBeFinished].status = "In Progress";
    todos[indexToBeFinished].finishButtontext = "Finished";
  } else {
    todos[indexToBeFinished].status = "Finished";
    // console.log(finishedButtonPressed.textContent);
    todos[indexToBeFinished].finishButtontext = "Undo";
  }

  todos.sort((a, b) => {
    if (a.status == "Finished") {
      return 1;
    }
    return -1;
  });
  reRenderTodos();
}

function addTodo(todoData, todoCount) {
  console.log("addTodo", todoData, todoCount);
  let rowDiv = document.createElement("div");
  let todoItem = document.createElement("div");
  let todoNumber = document.createElement("div");
  let todoDetail = document.createElement("div");
  let todoStatus = document.createElement("div");
  let todoActions = document.createElement("div");
  let deleteButton = document.createElement("button");
  let finishedButton = document.createElement("button");
  let hr = document.createElement("hr");

  // adding classes
  rowDiv.classList.add("row");
  todoItem.classList.add(
    "todo-item",
    "d-flex",
    "flex-row",
    "justify-content-between",
    "align-items-center"
  );
  todoNumber.classList.add("todo-no");
  todoDetail.classList.add("todo-detail", "text-muted");
  todoStatus.classList.add("todo-status", "text-muted");
  todoActions.classList.add(
    "todo-actions",
    "d-flex",
    "justify-content-start",
    "gap-2"
  );
  deleteButton.classList.add("btn", "btn-danger", "delete-todo");
  finishedButton.classList.add("btn", "btn-success", "finish-todo");

  finishedButton.setAttribute("todo-idx", todoCount - 1);
  deleteButton.setAttribute("todo-idx", todoCount - 1);
  deleteButton.onclick = removeTodo;
  finishedButton.onclick = finishTodo;

  todoNumber.textContent = `${todoCount}.`;
  todoDetail.textContent = todoData.text; // sets the todo text sent from the input element
  todoStatus.textContent = todoData.status;
  deleteButton.textContent = "Delete";
  finishedButton.textContent = "Finished";

  todoActions.appendChild(deleteButton);
  todoActions.appendChild(finishedButton);

  todoItem.appendChild(todoNumber);
  todoItem.appendChild(todoDetail);
  todoItem.appendChild(todoStatus);
  todoItem.appendChild(todoActions);

  rowDiv.appendChild(todoItem);
  rowDiv.appendChild(hr);

  // todoDataSection.appendChild(rowDiv);
  todoDataList.appendChild(rowDiv);
}

// let getTodosButton = document.getElementById("get-todos");

// getTodosButton.addEventListener("click", () => {
//   console.log("clicked");
// });

// getTodosButton.addEventListener("click", () => {
//   console.log("clicked wow");
// });

// getTodosButton.onclick = function () {
//   console.log("onclick on function");
// };
