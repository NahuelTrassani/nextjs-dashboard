const fs = require('node:fs')
const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(),"\n",                //si es un fichero
    stats.isDirectory(),"\n",           //si es un directorio
    stats.isSymbolicLink(),"\n",        //si es un enlace simbólico
    stats.size,"\n",                    //tamaño en bytes
)