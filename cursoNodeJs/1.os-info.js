const os = require('node:os')
console.log("so: ", os.platform(),"\n",
"vs: ", os.release(),"\n",
"arq: ", os.arch(),"\n",
"CPU's: ", os.cpus(),"\n",
"Memoria libre:", os.freemem() / 1024 / 1024,"\n",
"Memoria total:", os.totalmem() / 1024 / 1024,"\n",
"uptime: ", os.uptime() / 60 / 60
)