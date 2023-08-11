const hourElement = document.getElementById('hourElement')
const minElement = document.getElementById('minElement')
const secElement = document.getElementById('secElement')
const mod = document.getElementById('mod')

setInterval(function () {
    const d = new Date()

    hourElement.textContent = ((d.getHours()<10?'0':'' + d.getHours() + ":"))
    minElement.textContent = ((d.getMinutes()<10?'0':'') + d.getMinutes() + ":")
    secElement.textContent = ((d.getSeconds()<10?'0': '') + d.getSeconds())
}, 500);

mod.addEventListener('click',()=> {
    document.body.classList.toggle("body--black")
    const button = document.querySelector(".clockContainer button");
    button.classList.toggle("button-black");
})