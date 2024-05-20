//esto solo en los modulos nativos
//que no tienen promesas nativas
const { promisify } = require('node:util')
const readFile = promisify(fs.readFile)

const fs = require('node:fs')

/*
const text = fs.readFileSync('./archivo.txt', 'utf-8') 
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('arch 1')
console.log(text)

console.log('arch 2')
console.log(text2)
*/

readFile('./archivo.txt', 'utf-8')
.then(text => {
    console.log(text)
})

console.log("proceso intermedio mientras lee el archivo...")

fs.readFile('./archivo2.txt', 'utf-8', (err, text) =>{
console.log(text)
})