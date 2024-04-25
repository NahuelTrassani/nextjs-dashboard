import { readFile } from 'node:fs/promises'

const text = await readFile('./archivo.txt', 'utf-8')
console.log("texto 1", text)

console.log("proceso intermedio mientras lee el archivo...")

const text2 = await readFile('./archivo2.txt', 'utf-8')
console.log("texto 2", text2)