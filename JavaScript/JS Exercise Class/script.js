const nameInput = document.querySelector('#nameInput');
const amountInput = document.querySelector('#amountInput');
const submitButton = document.getElementById('submitButton');
const cardSection = document.querySelector('.cardSection');
submitButton.addEventListener('click', () => {
    if(nameInput.value !="" && amountInput.value !="") {
        var newUl = document.createElement('ul');
        var uniqueName = document.createElement('li');
        uniqueName.textContent = nameInput.value;
        var uniqueNumber = document.createElement('li');
        uniqueNumber.textContent = amountInput.value;
        uniqueNumber.id = nameInput.value;

        var uniqueButton = document.createElement('button');
        uniqueButton.id = nameInput.value + "_button";
        uniqueButton.textContent = "Lower The Amount";

        let rent = document.getElementById(nameInput.value + 1);

        rent.addEventListener('click', ()=> {
            var currentNumber = document.getElementById(rent - 1);
            currentNumber.textContent -= "_button";
        })

        newUl.appendChild(uniqueName);
        newUl.appendChild(uniqueNumber);

        cardSection.appendChild(newUl);

    }  
})