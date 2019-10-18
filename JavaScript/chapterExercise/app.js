// 1.
function generatedId() {
  const rNumber = Math.floor(Math.random() * Math.floor(10000001))
  return rNumber
}

console.log(generatedId())
debugger

// 2.




function chooseRandomTeam() {
    const randomTeam = team[Math.floor(Math.random()*team.length)]
    return randomTeam
}
debugger
const team = ['red team', 'blue team', 'green team']
console.log(chooseRandomTeam())

//3.


function createPlayer(name) {
  return {
    id: generatedId(),
    name: name,
    score: 0,
    teams: chooseRandomTeam(team)
  }
}


debugger
const result = createPlayer('John')
console.log(result)

//4.

const playersList = [
  createPlayer('John'),
  createPlayer('Joe'),
  createPlayer('Jenn'),
  createPlayer('Josh')
]

console.log(playersList)

//5.
function add10Points(playersList, name) {
    // 1. find player
  const index = playersList.findIndex(function(player) {
      return player.name === name
  })
  debugger
}
  //2. add 10 add10Points
  playersList[index].score = playersList[index].score
  //3. return player

add10Points(playersList, 'John')
add10Points(playersList, 'Joe')
add10Points(playersList, 'Jenn')
add10Points(playersList, 'Josh')


function getTeamsOverallScore(playersList, team) {
  let total = 0
  playersList.forEach(function(player) {
    if(player.team ===team) {
      total=total + player.score
    }
  })
}

console.log(getTeamsOverallScore(player, 'red'))
console.log(getTeamsOverallScore(player, 'blue'))
console.log(getTeamsOverallScore(player, 'green'))