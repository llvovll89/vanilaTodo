const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.querySelector(".todo-list");


function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";

  button.addEventListener("click", (e) => {
    const li = e.target.parentElement;
    alert("삭제 되었습니다..");
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintToDo(newTodo);
}
todoForm.addEventListener("submit", handleSubmit);
