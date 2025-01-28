
// this is an array to store todos
let todos = [];


const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");


//Function to render todos

function renderTodos() {
    todoList.innerHTML = ''; // Clears the list
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
         <span>${todo}</span>
         <button onclick = "editTodo(${index})">Edit</button>
         <button onclick = "deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

function addTodos(event) {
   event.preventDefault();//prevenet form submission
   const newTodo = todoInput.value.trim();
   if (newTodo) {
    todos.push(newTodo);
    todoInpujt.value = ''; //clear the input
    renderTodos();
   }

}


todoForm.addEventListener('submit',addTodos);
renderTodos();
