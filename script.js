// Load tasks on startup
window.onload = function () {
    loadTasks();
};

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") return;

    addTaskToUI(taskText);
    saveTask(taskText);

    input.value = "";
}

function addTaskToUI(taskText) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button onclick="removeTask(this)">Delete</button>
    `;
    document.getElementById("taskList").appendChild(li);
}

function removeTask(button) {
    const taskText = button.parentElement.innerText.replace("Delete", "").trim();
    removeTaskFromStorage(taskText);
    button.parentElement.remove();
}

function toggleComplete(taskElement) {
    taskElement.style.textDecoration =
        taskElement.style.textDecoration === "line-through"
            ? "none"
            : "line-through";
}

// ---------- LOCAL STORAGE FUNCTIONS ----------

// Save task to localStorage
function saveTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove task from localStorage
function removeTaskFromStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks when page loads
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTaskToUI(task));
}
