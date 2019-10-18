// const germanSheppard = {
//   type: 'German Sheppard',
//   legs:4,
//   color: 'brown',
//   bark: function() {
//      console.log('I am ' + this.type)
//   }
// }


// germanSheppard.bark()

// const husky = {
//   type: 'Husky',
//   legs:4,
//   color: 'brown',
//   bark: function() {
//     console.log('Hello, I am a ' +  this.type)
//   }
// }

// husky.bark()

/* this replaces name of object, references itself */
/*Using This*/
// const dog = {
//   color: 'red',
//   legs: 4,
//   favoriteToy: 'ball',
//   bark() {
//       console.log('I am ', this.color)
//   },
//   play() {
//       console.log('chasing ', this.favoriteToy)
//   },

//   getNewToy(toy) {
//       this.favoriteToy = toy
//   }
// }

// dog.play()
// dog.getNewToy('frisbee')
// dog.play()

/*when making general functions to pass to diff things, dont use this */

/* excersize1*/

// const invoice = {
//   description: 'expensive',
//   total: 500,

//   setDescription: function(text) {
//     this.description = text
//   },
//   getDescription: function() {
//     console.log(this.description)
//   },
//   setTotal: function(x) {
//     this.total = this.total + x
//   },
//   getTotal: function() {
//     console.log(this.total)
//   }
// }

// invoice.setDescription('roofing')
// invoice.getDescription()
// invoice.setTotal(56788)
// invoice.getTotal()

/*his*/

// const invoice = {
//   total: 500,
//   jobs: [],
//   getTotal() {
//     console.log(500)
//   },
//   setTotal() {
//     this.total = 500
//   },

//   addJob(text) {
//     this.jobs.push(text)
//   },
//   getjobs() {
//     this.jobs.forEach(x => console.log(x))
//   }
// }

// invoice.addJob('roofing')
// invoice.addJob('painting')
// invoice.getjobs()

// prototypes
// const Dog = {
//   type: 'dog',
//   bark: () => console.log('Hi!! I am a ' + this.type),
//   play: () => console.log('Chasing ball!')
// }

// const germanSheppard = Object.create(Dog)
// // IN CONSOLE: check prototype
// germanSheppard.bark()
// // IN CONSOLE: check Object.getPrototypeOf(GermanSheppard)


//constructor function
// function Dog(type) {
//   this.type = type;
// }
// Dog.prototype.speak = () => console.log('Hi!! I am a ' + this.type)
// Dog.prototype.play = () => console.log('Chasing ball!!')

// let germanSheppard = new Dog("German Sheppard")
// germanSheppard.speak()

// let husky = new Dog('Husky') 
// husky.speak()


const invoice = {
  description: 'expensive',
  total: 500,

  setDescription: function(text) {
    this.description = text
  },
  getDescription: function() {
    console.log(this.description)
  },
  setTotal: function(x) {
    this.total = this.total + x
  },
  getTotal: function() {
    console.log(this.total)
  }
}

invoice.setDescription('roofing')
invoice.getDescription()
invoice.setTotal(56788)
invoice.getTotal()



function invoice(type) {
  this.type = type;
}
invoice.prototype.description = () => console.log(expensive)
invoice.prototype.total = () => console.log('Chasing ball!!')

let setDescription = new invoice("text")
description.setDescription()

let getDescription = new invoice('expensive') 
description.getDescription()