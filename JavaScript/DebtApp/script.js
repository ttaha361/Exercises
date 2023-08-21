const addButton = document.getElementById('addButton');
const dataField = document.querySelector('#dataField');
const messageField = document.querySelector('#messageField');
const debtField = document.querySelector('#debtField');
const debtSearchField = document.querySelector('#debtSearchField');


var dataArray = JSON.parse(localStorage.getItem('debt'));
if(dataArray != null){
    for(i = 0; i < dataArray.length; i++) {
        var dta = document.createElement('li');
        dta.textContent = ((dataArray[i].Name) + ' ' + '-' + ' ' + (dataArray[i].Debt) + '$');
        dataField.appendChild(dta);
    }
}

addButton.addEventListener('click', () => {
    var dta = document.createElement('li');
    dta.textContent = ((messageField.value) + ' ' + '-' + ' ' + (debtField.value) + '$');
    dataField.appendChild(dta);
    var dataObject = { Name: messageField.value, Debt: debtField.value};
    dataArray.push(dataObject);
    localStorage.setItem('debt', JSON.stringify(dataArray));
    messageField.value = "";
    debtField.value = "";
})

debtSearchField.addEventListener('keypress', () => {
    console.log("typing")
})