let taskCounter = 0;

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        taskCounter++;

        const emptyMessage = taskList.querySelector('.empty-message');
        if (emptyMessage) emptyMessage.remove();

        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span class="task-number">#${taskCounter}</span>
            <span class="task-text">${taskText}</span>
            <button class="delete-btn" onclick="this.parentElement.remove()">✕</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    });

    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addTaskBtn.click();
    });
});
