const submit = document.getElementById('submit')
const playerCount= document.getElementById('playerCount')
const gridSizeE1 = document.getElementById('gridSize')

submit.addEventListener('click' , function(){
    const NumberOfPlayers = playerCount.value
    const gridSize = gridSizeEl.value

    let playerStats= []

    for(let i=1; i<=NumberOfPlayers;i++){
        playerStats.push({
            id:1,
            reach:0,
            rolls:[],
            path:[0]
        })
    }

    let maxReach=0;
    let maxReachId = -1

    while(maxReach<gridSize*gridSize){
        for(let i=0; i<NumberOfPlayers;i++){
             const currRoll = getRandomRoll()
             playerStats[i].rolls.push(currRoll)

             if(playerStats[i].reach===0 && (currRoll !==1 && currRoll!==6)){
                 playerStats[i].path.push(0)
             }else{
                 const newReach=playerStats[i].reach+currRoll
                 
                 if(newReach<=gridSize*gridSize){
                     playerStats[i].reach=newReach

                     playerStats[i].path.push(newReach)

                     if(newReach>maxReach){
                         maxReach= newReach
                         maxReachId = playerStats[i].id
                     }
                     if(maxReach>=gridSize*gridSize){
                         break;
                     }
                 }else{
                     playerStats[i].path.push(playerStats[i].reach)
                 }
                 }

                }
        }   
        
    createGameCard(playerStats,maxReach,NumberOfPlayers)
})
function createGameCard(playerStats,winnerId,NumberOfPlayers){
         const tableBody =document.getElementById('card-body')
         tableBody.innerHtml=''
         for(let i=0;i<NumberOfPlayers;i++){
             const tr =document.createElement('tr')

             const tdId = document.createElement("td")
             const tdDiceRoll = document.createElement("td")
             const tdDiceRollHistory = document.createElement("td")
             const tdPositionHistory = document.createElement("td")
             const tdWinnerStatus = document.createElement("td")

             tdId.innerHTML=playerStats[i].id

             const lastIndexDiceRoll =playerStats[i].rolls.length-1
             if(lastIndexDiceRoll>=0)
             tdDiceRoll.innerHTML=playerStats[i].rolls[lastIndexDiceRoll]

             tdDiceRollHistory.innerHTML = playerStats[i].rolls.toString()

             tdPositionHistory.innerHTML = playerStats[i].path.toString()
     
             if(playerStats[i].id==winnerId){
                tdWinnerStatus.innerHTML="Winner"
            }else{
                tdWinnerStatus.innerHTML="Losser"
            }
            tr.appendChild(tdId)
            tr.appendChild(tdDiceRoll)
            tr.appendChild(tdDiceRollHistory)
            tr.appendChild(tdPositionHistory)
            tr.appendChild(tdWinnerStatus)
    
            tableBody.appendChild(tr)
     
         }
}

function getRandomRoll(){
    return Math.floor(Math.random()*6+1)
}




