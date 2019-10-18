// - - - - - - - - - - - - - - - - - - - - - - 
// UPDATING WHATS ALREADY THERE
// - - - - - - - - - - - - - - - - - - - - - - 

// this returns 1 dom element, because ids refer to only 1 thing
const header = document.getElementById('header')
header.innerHTML = 'header text'
header.textContent = 'header text 2'

// // this returns an array because its possible there could be 
// // more than one
const hero = document.getElementsByClassName('hero')[0]
hero.innerHTML = 'hero text'
hero.textContent = 'hero text 2'

// // set text on array of p's using querySelectorAll
const paragraphs = document.querySelectorAll('.section p')
paragraphs.forEach(x => {
    x.textContent = 'new text'
// })

// // get 1 thing with query selector
const queriedHeader = document.querySelector('#header')
queriedHeader.textContent = '!!!'


// // - - - - - - - - - - - - - - - - - - - - - - 
// // ADDING 
// // - - - - - - - - - - - - - - - - - - - - - - 
const section = document.querySelector('.section')
const newElement = document.createElement('p')
newElement.textContent = 'added new element'
newElement.className = 'my-new-class'
section.appendChild(newElement)



// // - - - - - - - - - - - - - - - - - - - - - - 
// // REMOVE  
// // - - - - - - - - - - - - - - - - - - - - - - 
const referenceToNewElement = document.querySelector('.my-new-class')
referenceToNewElement.remove() 