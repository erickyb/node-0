import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'
console.log('infomacion del sistema operativo:')
console.log('--------------------')

console.log('nombre de sistema operativo',platform())
console.log('version del sistema o.',release())
console.log('arquitectura',arch)
console.log('cpu: ',cpus)
console.log('memoria libre ',freemem()/1024/1024)
console.log('memoria total ',totalmem()/1024/1024)
console.log('uotime',uptime()/60/60)