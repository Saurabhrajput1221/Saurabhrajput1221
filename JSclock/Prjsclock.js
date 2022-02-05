const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setTime(){

    let now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    const secDegrees = ((seconds/60)*360)+90
    secondHand.style.transform = `rotate(${secDegrees}deg)`
    secondHand.style.height= '1px'
    // secondHand.style.width= '75%'

    const minDegrees = (minutes/60*360)+90 +(seconds/60)*6
    minHand.style.transform = `rotate(${minDegrees}deg)`
    minHand.style.height='15px'

    const hourDegrees = (hours/12*360)+90 +(minutes/60)*30
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    minHand.style.height='3px'

}

setInterval(setTime,10)
setTime()