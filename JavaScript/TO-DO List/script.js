document.addEventListener('DOMContentLoaded', () => {
    const TaskText = document.getElementById('TaskText');
    const TaskButton = document.getElementById('TaskButton');
    const taskContainer = document.querySelector('.taskContainer'); // Corrected selector

    
    var taskArray = [];
    
    const startLoop = () =>{
        taskArray.push = JSON.parse(localStorage.getItem('tasks'));
    }

    startLoop();

    console.log(taskArray);
    TaskButton.addEventListener('click', () => {
        if (TaskText.value !== "") {
            var div = document.createElement('div');
            div.classList.add('tasks');
            
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            div.appendChild(checkbox);
            var hr = document.createElement('hr')
            div.appendChild(document.createTextNode(TaskText.value)); // Add text content after the checkbox
            div.appendChild(hr);
            taskContainer.appendChild(div);    
            taskArray.push(TaskText.value);
            TaskText.value = ""; // Clear input field
            localStorage.setItem('tasks', JSON.stringify(taskArray));
        }
    });
});
