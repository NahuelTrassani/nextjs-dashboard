import { readFile } from 'node:fs/promises'

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, text2])=>{
    console.log("texto 1", text)
    console.log("texto 2", text2)
})

