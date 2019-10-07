const os = require('os')

console.log(os.platform())
console.log(os.release())
console.log(`Free mem: ${os.freemem()} de ${os.totalmem()}`)