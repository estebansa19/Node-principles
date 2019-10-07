const http = require('http')
const colors = require('colors')

const handleServer = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })  
  response.end(
    JSON.stringify({
      data: {
        name: 'Esteban',
        lastName: 'Saldarriaga Alzate',
        age :19,
        job: 'Backend dev'
      }
    })
  )

  // response.writeHead(200, { 'Content-Type': 'text/html' })
  // response.write('<h1>Hola mundo</h1>')
}

const server = http.createServer(handleServer)
server.listen(3000, () => {
  console.log('Servidor en el puerto 3000'.magenta)
})
