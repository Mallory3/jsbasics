
function assignGrade(score) {
 
  if (score > 90) {
    return 'A'
  }
  
  if (score > 80) {
    return 'B'
  }
  
  if (score > 70) {
    return 'C'
  }
      
  if (score > 51) {
    return 'D'
  }
  
    return 'F'
  
     
}
  
const score = 5

console.log(assignGrade(score))