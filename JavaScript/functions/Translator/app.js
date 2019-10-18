
function helloWorld(language) {
 
  if (language === 'es') {
    return "Hola, mundo"
  }

  if (language === 'jp') {
    return "ハローワールド"
  }

  else {
    return "Hello, World"
  }
}

const result = helloWorld('')
console.log(result)