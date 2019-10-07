function add(n, n2) {
  return n + n2
}

function substract(n, n2) {
  return n - n2
}

function multiply(n, n2) {
  return n * n2
}

function divide(n, n2) {
  if(n2 == 0) {
    console.log('No se puede dividir entre cero')
  } else {
    return n / n2
  }
}

Math = {
  add: add,
  substract: substract,
  multiply: multiply,
  divide: divide
}

module.exports = Math;