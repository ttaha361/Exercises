const timeText = document.getElementById('timeText')
const startButton = document.getElementById('startButton')
const pauseButton = document.getElementById('pauseButton')
const stopButton = document.getElementById('stopButton')

let seconds = 0
let minutes = 0
let zerocheck = 0
let zeroSecond = 0

startButton.addEventListener('click',()=>{
    timerInterval = setInterval(function () {
        timeText.textContent = (String(zerocheck) + String(minutes) + ":"+ zeroSecond + seconds)
        seconds += 1
        if (seconds === 10){zeroSecond = ""}
        if (seconds === 60){
            zeroSecond = 0;
            seconds = 0; 
            if(minutes === 9){zerocheck = ""};
            minutes += 1;
        }
    },1000)
})

pauseButton.addEventListener('click', ()=> {
    clearInterval(timerInterval);
})

stopButton.addEventListener('click',()=>{
    clearInterval(timerInterval);
    seconds = 0
    minutes = 0
    zerocheck = 0
    zeroSecond = 0
})