
// How To Make a Function

// IO - Input
const bill = prompt('What was your bill?')

// Definition
function  addTip(bill) {
  return bill * 1.2
}

//actually doing it
addTip()

// IO - Output
console.log(addTip())


// Arrow Function (condensed way of above)

const addTip = bill => bill * 1.2
// or
const addTip = bill => {
  return bill * 1.220
}