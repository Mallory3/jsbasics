
//function to update name

const john = {
  name: 'Henry',
  country: false,
  email: false
}



function updateName(student, name) {
    student.name = name
    return student
}

const updatedStudent = updateName(john, 'John')
console.log(updatedStudent)
debugger

//function to update country


function updateCountry(student, country) {
  student.country = country
  return student
}

const updatedStudent2 = updateCountry(john, 'CDN')
console.log(updatedStudent2)
debugger

//function to update email

function updateEmail(student, email) {
  student.email = email
  return student
}

const updatedStudent3 = updateEmail(john, 'john@examle.com')
console.log(updatedStudent3)
debugger

