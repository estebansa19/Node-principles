const express = require('express')
const colors = require('colors')
const server = express()

server.get('/', (req, res) => {
  res.send('<h1>Servidor con Express</h1>')
})

server.listen(3000, () => {
  console.log('Server en el puerto 3000'.red)
})