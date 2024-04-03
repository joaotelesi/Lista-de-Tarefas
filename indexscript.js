document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const todoText = input.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            input.value = '';
        }
    });

    function addTodoItem(text) {
        const li = document.createElement('li');
        li.textContent = text;
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
        todoList.appendChild(li);
    }
});
