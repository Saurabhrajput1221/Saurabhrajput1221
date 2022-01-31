const text1 = document.getElementById('text')
const speed1 = document.getElementById('speed')

const text = 'I love Programming!.....'

let idx = 1

const NUM = 50
let time = NUM/(speed1.value)

writeText()

function writeText(){
      text1.innerHTML= text.slice(0,idx)

      idx++;

      if(idx>text.length){
          idx=1
      }
      setTimeout(writeText,time)
    
}
speed1.addEventListener('input',(e) => { time=NUM/e.target.valve
})