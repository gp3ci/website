// Function to add a new task
function addTask() {
    let taskInput = document.getElementById("taskInput"); // Get input field
    let taskList = document.getElementById("taskList"); // Get task list

    let taskText = taskInput.value.trim(); // Get text and remove extra spaces

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    let listItem = document.createElement("li");
    listItem.innerHTML = `
        ${taskText} 
        <button class="delete-btn" onclick="deleteTask(this)">❌</button>
    `;

    // Append the new task to the list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
}

// Function to delete a task
function deleteTask(buttonElement) {
    let taskList = document.getElementById("taskList");
    let listItem = buttonElement.parentElement; // Get the parent <li> of the button
    taskList.removeChild(listItem); // Remove task
}
