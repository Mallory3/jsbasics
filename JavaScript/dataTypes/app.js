//defining objects with {}
const dog = {
  name: 'Spot', 
  legs: 4,
  color: 'brown',
  age: 7,
  city: 'Calgary',
  bark: function() {
    console.log('BARK!')
  }
  //name is a key/property, spot is a value - , is used to add another key: value pair
  // you can give an object (dog) a function (BARK!)
}

console.log(dog.name)
// . is used to reference the name on the dog

dog.bark()

// Array Example
const players = ['bananas', 'apples', 'oranges']
console.log(players)
players.forEach(function(item){
  console.log(item)
})

// arrays use [] to make an empty array. Arrays are multiples of something, ie numbers or booleans but typically objects ie Netflix has an array of movies






// 1. Make an array of three students that have this structure. 
//2. Using the forEach, consule.log the name

const student = {
  id: '1234',
  name: 'John',
  email: 'john@exaple.com'
}
const student2 = {
  id: '1234',
  name: 'Jane',
  email: 'john@exaple.com'
}
const student3 = {
  id: '1234',
  name: 'Joe',
  email: 'john@exaple.com'
}

const students = ['John', 'Jill', 'Joe']

console.log(students)
students.forEach(function(name){
  console.log(name)
})