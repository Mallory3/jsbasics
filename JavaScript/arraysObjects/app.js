

const shoppingList = [
  'bananas',
  'apples',
  'oranges'
]

//when you create an array theres lots of functions to add to it
//.push adds to the end of an array
shoppingList.push('kiwi')
console.log(shoppingList)

//get something in console
shoppingList[3] //kiwi

//remove from the End of array
shoppingList.pop()
console.log(shoppingList)

//adding to the beginning
shoppingList.unshift('pears')
console.log(shoppingList)

//remove from the beginning
shoppingList.shift()

//find index - if returns -1 it means its not found
shoppingList.indexOf('oranges')


//object notes

const john = {
  name: 'Henry',
  email: 'john@example.com',
  isEnrolled: false
}
//Update property
john.name = 'John'

//create a new property
john.country = 'CDN'

console.log(john)

//add an array to an object
john.course = []
john.course.push('html')
john.course.push('css')
john.course.push('js', "photoshop")

console.log(john)

//add an object
john.skills = {}
john.skills.html = 10

console.log(john)

//changing something (note: defining things you cant nest things, ie john.shoes.brand = "nike" becasue shoes is undefined therefore create one at a time)
john.isEnrolled = true
console.log(john)

//putting arrays and objects together

//recipe (doesnt actually do anything)
function cakeRecipe() {

}

//actually doing it
 const spotForMyRecipe = cakeRecipe

 spotForMyRecipe





const shopList = ['bananas','oranges','apples']

function printList (list, action) {
  for (let index = 0; index < list.length; index++) {
    // const element = array[index];
    action(list[index])
    // console.log(list[index])
  }
}

function printToConsole(item) {
  console.log(item)
}
printList(shoppingList, printToConsole)

//for Each
shoppingList.forEach(function(x) {
  console.log('HEYY --', x)
})

const students = [
  {
    name: 'John',
    isEnrolled: false
  },
  {
    name: 'James',
    isEnrolled: false
  }
]

const indexOfJohn = students.findIndex(function(item) {
  return item.isEnrolled === false
})

//find index


