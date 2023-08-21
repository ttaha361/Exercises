const addButton = document.getElementById('addButton');
const dataField = document.querySelector('#dataField');
const messageField = document.querySelector('#messageField');
const debtField = document.querySelector('#debtField');
const debtSearchField = document.querySelector('#debtSearchField');
const deleteButton = document.getElementById('deleteButton');

//Transferring localstorage data to an array and updating text field on every start
var dataArray = JSON.parse(localStorage.getItem('debt'));
if(dataArray != null){
    for(i = 0; i < dataArray.length; i++) {
        var dta = document.createElement('li');
        dta.textContent = ((dataArray[i].Name) + ' ' + '-' + ' ' + (dataArray[i].Debt) + '$');
        dataField.appendChild(dta);
    }
}
else{dataArray = [];}

//Add Button Function
addButton.addEventListener('click', () => {
    if(messageField.value != "" && debtField.value != "") {
        var dta = document.createElement('li');
        dta.textContent = ((messageField.value) + ' ' + '-' + ' ' + (debtField.value) + '$');
        dataField.appendChild(dta);
        var dataObject = { Name: messageField.value, Debt: debtField.value};
        dataArray.push(dataObject);
        localStorage.setItem('debt', JSON.stringify(dataArray));
        messageField.value = "";
        debtField.value = "";
    }
})

//Search Field Function
debtSearchField.addEventListener('input', () => {
    dataField.textContent = "";
    if(dataArray != null){
        for(i = 0; i < dataArray.length; i++) {
            if (dataArray[i].Name.toLowerCase().includes(debtSearchField.value.toLowerCase())) {
                var dta = document.createElement('li');
                dta.textContent = ((dataArray[i].Name) + ' ' + '-' + ' ' + (dataArray[i].Debt) + '$');
                dataField.appendChild(dta);
            }
        }
}})
//Delete Button
deleteButton.addEventListener('click', () => {
    if (debtSearchField.value != "" && dataArray != null) {
        for(let i = dataArray.length - 1; i >= 0; i--) {
            if (dataArray[i].Name.toLowerCase().includes(debtSearchField.value.toLowerCase())) {
                dataArray.splice(i,1);
                localStorage.setItem('debt', JSON.stringify(dataArray));
            }
        }
        if(dataArray != null){
            dataField.textContent = "";
            for(i = 0; i < dataArray.length; i++) {
                var dta = document.createElement('li');
                dta.textContent = ((dataArray[i].Name) + ' ' + '-' + ' ' + (dataArray[i].Debt) + '$');
                dataField.appendChild(dta);
            }
        }
    }
})

