function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <button onclick="removeTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}
li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="removeTask(this)">Delete</button>
`;

function toggleComplete(taskElement) {
    taskElement.style.textDecoration =
        taskElement.style.textDecoration === "line-through"
            ? "none"
            : "line-through";
}
li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="removeTask(this)">Delete</button>
`;

function toggleComplete(taskElement) {
    taskElement.style.textDecoration =
        taskElement.style.textDecoration === "line-through"
            ? "none"
            : "line-through";
}
li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="removeTask(this)">Delete</button>
`;

function toggleComplete(taskElement) {
    taskElement.style.textDecoration =
        taskElement.style.textDecoration === "line-through"
            ? "none"
            : "line-through";
}
li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="removeTask(this)">Delete</button>
`;

function toggleComplete(taskElement) {
    taskElement.style.textDecoration =
        taskElement.style.textDecoration === "line-through"
            ? "none"
            : "line-through";
}
