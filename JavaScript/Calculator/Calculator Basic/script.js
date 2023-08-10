const add = document.getElementById('add')
const sub = document.getElementById('sub')
const div = document.getElementById('div')
const mul = document.getElementById('mul')
const numberOne = document.getElementById('numberOne')
const numberTwo = document.getElementById('numberTwo')
const result = document.getElementById('result')

add.addEventListener('click', ()=> {
    add.style.backgroundColor = "green"
    sub.style.backgroundColor = "white"
    div.style.backgroundColor = "white"
    mul.style.backgroundColor = "white"
    var final = ((Number(numberOne.value)) + (Number(numberTwo.value)))
    result.textContent = final;
})

sub.addEventListener('click', ()=> {
    add.style.backgroundColor = "white"
    sub.style.backgroundColor = "green"
    div.style.backgroundColor = "white"
    mul.style.backgroundColor = "white"
    var final = ((Number(numberOne.value)) - (Number(numberTwo.value)))
    result.textContent = final;
})

div.addEventListener('click', ()=> {
    add.style.backgroundColor = "white"
    sub.style.backgroundColor = "white"
    div.style.backgroundColor = "green"
    mul.style.backgroundColor = "white"
    var final = ((Number(numberOne.value)) / (Number(numberTwo.value)))
    result.textContent = final;
})

mul.addEventListener('click', ()=> {
    add.style.backgroundColor = "white"
    sub.style.backgroundColor = "white"
    div.style.backgroundColor = "white"
    mul.style.backgroundColor = "green"
    var final = ((Number(numberOne.value)) * (Number(numberTwo.value)))
    result.textContent = final;
})

