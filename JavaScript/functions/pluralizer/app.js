


function pluralize(number, noun) {
  if (number <= 1) {
    return number + ' ' + noun
  } else {
    return number + ' ' + noun + 's'
  }
}

const number = '1' 
const noun = 'dog'

const result = pluralize(number, noun)
console.log(result)