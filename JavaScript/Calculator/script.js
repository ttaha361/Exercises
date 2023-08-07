const zero = document.getElementById('zero')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')

let numberone = 0;

zero.addEventListener('click', ()=>{
    numberMake(zero.textContent);
})

function numberMake(numberValue) {
    alert(numberValue);
}