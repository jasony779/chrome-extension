
document.addEventListener('DOMContentLoaded', ()=>{
const timeLeftDisplay = document.querySelector ('#time-left')
const startBtn = document.querySelector('#start-button')
timeLeft = 20

function countDown(){
    setInterval(function(){
        if(timeLeft<= 0){
            clearInterval(timeLeft = 0)
        }
        timeLeftDisplay.innerHTML = timeLeft
        timeLeft--;
    },500) 

}



startBtn.addEventListener ('click', countDown)


})
