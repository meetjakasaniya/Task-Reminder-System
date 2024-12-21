export function addTask(tasks, title, dueTime, priority) {
    try {
        if (!title || !dueTime || !priority) {
            throw new Error("Missing required task fields.");
        }
        const task = {
            title,
            dueTime: Date.now() + dueTime * 60000, 
            priority,
        };
        tasks.push(task);
    } catch (error) {
        console.error("Error adding task:", error.message);
    }
}
export function sortTasksByPriority(tasks) {
    const priorityLevels = { High: 1, Medium: 2, Low: 3 };
    return tasks.sort((a, b) => priorityLevels[a.priority] - priorityLevels[b.priority]);
}
export function displayTasksDueInTimeframe(tasks, timeframeInMinutes) {
    const now = Date.now();
    const timeframeInMillis = timeframeInMinutes * 60000;
    const tasksDueSoon = tasks.filter(task => task.dueTime > now && task.dueTime <= now + timeframeInMillis);
    return tasksDueSoon;
}
export function sendReminders(tasks) {
    const now = Date.now();
    tasks.forEach(task => {
        const timeLeft = task.dueTime - now;
        if (timeLeft > 0) {
            setTimeout(() => {
                alert(`Reminder: ${task.title} is due now!`);
            }, timeLeft);
        }
    });
}



