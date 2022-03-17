const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function checkToDo(e) {
    const li = e.target.parentElement;
    li.children[0].classList.toggle("done");
    
    todos.forEach((todo) => {
        if (todo.id === parseInt(li.id)) {
            todo.done = todo.done ? 0 : 1;
            saveTodos();
        }
    })
}

function deleteTodo(e) {
    const li = e.target.parentElement;
    
    const deleteOrNot = confirm(`Are You Sure To Delete 👉 ${li.children[0].innerText}?`);
    if (deleteOrNot) {
        todos = todos.filter((todo) => todo.id !== parseInt(li.id));
        saveTodos();

        li.remove();
    }
}   

function paintTodo(todoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const checkBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    li.id = todoObj.id;
    li.style = "margin:1vh";
    
    span.innerText = todoObj.content;
    if (todoObj.done) { span.classList.add("done"); }

    checkBtn.innerText = "✅";
    checkBtn.className = "todo-btn";
    checkBtn.addEventListener("click", checkToDo);

    deleteBtn.innerText = "❌";
    deleteBtn.className = "todo-btn";
    deleteBtn.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(checkBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

function onTodoSubmit(e) {
    e.preventDefault();

    if (localStorage.getItem(USERNAME_KEY) === null) {
        alert("Please set your name and LOG IN first to save a To Do 👀");
        return;
    }
    
    const todo = todoInput.value;
    todoInput.value = "";

    const todoObj = {
        id: Date.now(),
        content: todo,
        done: 0
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