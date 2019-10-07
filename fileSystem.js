const fs = require('fs')

fs.writeFile('./texto.txt', 'linea uno', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Archivo creado')
  }
})

fs.readFile('./texto.txt', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data.toString())
  }
})