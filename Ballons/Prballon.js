const container =document.querySelector(".balloon-container")
let popped =0;
const noBallons = 25;

for(let i=0; i<=noBallons; i++){
    const E1 = document.createElement('div')

    E1.classList.add('ballon')
    E1.innerText= 'pop!'
    const randomColor = getColor()
    E1.style.backgroundColor = `${randomColor}`
    E1.style.color=`${randomColor}`
 

    E1.addEventListener('mouseenter',function(){
        if(E1.style.backgroundColor!=='transparent')         
        
        E1.style.backgroundColor='transparent'
        checkAllPopped
    })
     container.appendChild(E1)

}

function checkAllPopped(){
    if(popped==25){
        let massage = document.querySelector('.zero-balloon')
        massage.style.display ='block'
        container.innerHTML=''
    }
}
function getColor(){
    function color(){
        let hex = random(255).toString(16)

        return hex.padStart(2,'0')
    }
    return '#'+color()+color()+color()
}
function random(number){
    let val = Math.floor(Math.random()*number)

    return val;
}



