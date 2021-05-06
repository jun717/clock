let secondHand=document.querySelector('.second-hand')
let minuteHand=document.querySelector('.minute-hand')
let hourHand=document.querySelector('.hour-hand')

function getTime(){
    let time = new Date()
    let sec = time.getSeconds()
    let min = time.getMinutes()
    let hour = time.getHours()
    sec = time.getSeconds()

    secondHand.style.transform = `rotate(${sec/60*360-90}deg)`
    minuteHand.style.transform = `rotate(${min/60*360-90}deg)`
    hourHand.style.transform = `rotate(${hour/12*360-90}deg)`

}

setInterval(getTime, 1000)

