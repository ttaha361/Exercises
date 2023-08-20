document.addEventListener('DOMContentLoaded', () => {
    const TaskText = document.getElementById('TaskText');
    const TaskButton = document.getElementById('TaskButton');
    const taskContainer = document.querySelector('.taskContainer'); // Corrected selector
    const tasks = document.querySelector('.tasks');
    const resetButton = document.getElementById('resetButton');

    var localArray = JSON.parse(localStorage.getItem('tasks')) || []; // Initialize as an empty array if no data in local storage
    console.log(localArray);
    let i = 0;
    let len = localArray.length;
    for(i = 0; i < len; i++) {
        var div = document.createElement('div');
        div.classList.add('tasks');
        
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        div.appendChild(checkbox);
        var hr = document.createElement('hr');
        div.appendChild(document.createTextNode(localArray[i])); // Add text content after the checkbox
        div.appendChild(hr);
        taskContainer.appendChild(div);
    }

    TaskButton.addEventListener('click', () => {
        if (TaskText.value !== "") {
            var div = document.createElement('div');
            div.classList.add('tasks');
            
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            div.appendChild(checkbox);
            var hr = document.createElement('hr');
            div.appendChild(document.createTextNode(TaskText.value)); // Add text content after the checkbox
            div.appendChild(hr);
            taskContainer.appendChild(div);
            localArray.push(TaskText.value);
            localStorage.setItem('tasks', JSON.stringify(localArray));
            TaskText.value = ""; // Clear input field
        }
    });
    resetButton.addEventListener('click', () => {
        localStorage.clear();
        location.reload();
    })
});