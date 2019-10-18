// console.log('give my order')
// setTimeout(function() {
//   console.log('Get Drink')


// }, 2000)
// debugger
// console.log('pay for drink')

/* promise, I promise I will give this to you at some time..*/
/* function automatically has a resolve, reject ie success and system failure*/
// const makeExpensiveDrink = new Promise(function(resolve, reject) {
//   setTimeout(function(){
//     resolve('heres your coffee')
//   }, 2000)
// })

// /* add a then method--make drink then.... */
// makeExpensiveDrink.then(function(text){
//   debugger
// console.log(text)
// })
/*fetching API*/

/*these functions are the same */
// function myAction() {
//   return 1234
// }
// const myAction = () => 1234


// const url = 'https://swapi.co/api/planets/1/'
// fetch(url)
//   .then(x => {
//       return x.json()
//   })
//   .then(x => {
//      console.log('Name:', x.name, 'Population:', x.population, 'Climate:', x.climate, 'Diameter:', x.diameter)
//   })


/* when something goes wrong... */
// const url = 'https://swapi.co/api/people/2341w21/'

// fetch(url)
//   .then(x => {
//     return x.json()
// })
// .then(x => {
//   if(x.detail === 'Not found') {
//     throw new Error('not found')
//  }
//     console.log('success')
// })
// .catch( err => {
//   console.log(err || 'server not available')
// })

/*Excersize 2/3 */

function writeToPage(text) {
  const el = document.createElement('div')
  el.id = 'display'
  el.style = `
    padding: 20px 40px;
    border-radius: 5px;
    background: #222;
    color: white;
    font-family: sans-serif;
    display: inline-block;
  `
  el.textContent = text
  document.body.appendChild(el)
}


function updateDisplay(text) {
  const el = document.querySelector('#display')
  el.textContent = text
}

const url = 'https://swapi.co/api/people/100'


writeToPage('Loading...')

fetch(url)
  .then(x => {
    return x.json() 
 })

 .then(x => { 
  if(x.detail === "Not found") {
    throw "uh oh"
  }
  updateDisplay(x.name) 
 })


 .catch(err => {
  updateDisplay(err)
   })
