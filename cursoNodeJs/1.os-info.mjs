import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'
console.log("so: ", platform(),"\n",
"vs: ", release(),"\n",
"arq: ", arch(),"\n",
"CPU's: ", cpus(),"\n",
"Memoria libre:", freemem() / 1024 / 1024,"\n",
"Memoria total:", totalmem() / 1024 / 1024,"\n",
"uptime: ", uptime() / 60 / 60
)