import { addTask, sortTasksByPriority, displayTasksDueInTimeframe, sendReminders } from './taskManager.js';

const tasks = [];
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert("Form submission prevented!");
    const title = document.getElementById('title').value;
    const dueTime = parseInt(document.getElementById('dueTime').value);
    const priority = document.getElementById('priority').value;    
    addTask(tasks, title, dueTime, priority);
    updateTaskList();
    sendReminders(tasks);
    taskForm.reset(); 
});
function updateTaskList() {
    taskList.innerHTML = ''; 
    const tasksDueSoon = displayTasksDueInTimeframe(tasks, 10);
    const sortedTasks = sortTasksByPriority(tasksDueSoon);
    sortedTasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = `Title: ${task.title}, Due Time: ${new Date(task.dueTime).toLocaleTimeString()}, Priority: ${task.priority}`;
        taskList.appendChild(listItem);
    });
}   