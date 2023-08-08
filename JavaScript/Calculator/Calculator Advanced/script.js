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
const result = document.getElementById('result')

let numberone = 0
let numbertwo = 0
let oneSelected = false
let twoSelected = false

function numberMake(numberValue) {
    alert(numberValue);
}

zero.addEventListener('click', ()=>{
    if (oneSelected == false) {
        oneSelected = true
    }
    else if (twoSelected == false) {
        twoSelected = true
    }
})

one.addEventListener('click', ()=>{
    if (oneSelected == false) {
        oneSelected = true
    }
    else if (twoSelected == false) {
        twoSelected = true
    }
})
