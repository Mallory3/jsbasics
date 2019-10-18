
//Generic functions to add or remove items from any list
//excersizes

//first

const exList = [
  'item1',
  'item2',
  'item3'
]

function addToList(list, item) {
    list.push(item)
    return list
}

const result = (addToList(exList, 'item4'))
console.log(result)


//second

function removeLastItem(list) {
    list.pop()
    return list
}

console.log(removeLastItem(exList))

//third

function addItemToBeginning(list, item) {
    list.unshift(item)
    return list
}

console.log(addItemToBeginning(exList, 'item4'))

//forth

function removeItemFromBeginning(list) {
      list.shift()
      return list
}

console.log(removeItemFromBeginning(exList))