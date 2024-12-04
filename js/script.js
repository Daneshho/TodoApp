const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
    const taskValue = taskInput.value.trim();
    if (taskValue) {
        const newTask = document.createElement('li');
        newTask.textContent = taskValue;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
});

clearBtn.addEventListener('click', () => {
    taskList.innerHTML = '';
});