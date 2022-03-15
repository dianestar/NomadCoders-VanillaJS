const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(e) {
    const li = e.target.parentElement;

    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();

    li.remove();
}   

function paintTodo(todoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = todoObj.id;
    span.innerText = todoObj.content;
    button.innerText = "❌";
    button.className = "delete-btn";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function onTodoSubmit(e) {
    e.preventDefault();
    
    const todo = todoInput.value;
    todoInput.value = "";

    const todoObj = {
        id: Date.now(),
        content: todo
    };
    todos.push(todoObj);
    saveTodos();
    paintTodo(todoObj);
}

todoForm.addEventListener("submit", onTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
    todos = JSON.parse(localStorage.getItem(TODOS_KEY));
    todos.forEach(paintTodo);
}