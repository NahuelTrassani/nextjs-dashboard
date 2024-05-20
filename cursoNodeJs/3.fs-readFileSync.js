
const fs = require('node:fs')

console.log("leyendo el primer archivo...")
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log("Primer Texto: ", text)

console.log("proceso intermedio mientras lee el archivo...")

console.log("leyendo el 2do archivo...")
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log("2do Texto: ", text2)
