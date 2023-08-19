document.addEventListener('DOMContentLoaded', () => {
    const TaskText = document.getElementById('TaskText');
    const TaskButton = document.getElementById('TaskButton');
    const taskContainer = document.querySelector('.taskContainer'); // Corrected selector

    const localArray=[];

    localArray.push(JSON.parse(localStorage.getItem('tasks')));
    console.log(localArray);

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
            localArray.push(TaskText.value);
            localStorage.setItem('tasks', JSON.stringify(localArray));
            TaskText.value = ""; // Clear input field
        }
    });
});