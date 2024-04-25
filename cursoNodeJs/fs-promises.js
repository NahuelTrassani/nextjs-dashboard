const fs = require('node:fs/promises')

fs.readFile('./archivo.txt', 'utf-8')
.then(text => { // ejecuta el callback
    console.log(text)
} )

console.log("proceso intermedio mientras lee el archivo...")

fs.readFile('./archivo2.txt', 'utf-8')
.then(text =>{
    console.log(text)
})