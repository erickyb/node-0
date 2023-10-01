const fs=require('node:fs/promises')


console.log('primer archivo')
fs.readFile('./archivo.txt','utf-8',(err,text)=>{
    console.log('1-----archivo',text)
})

console.log('------->  hacer cosas')
console.log('segundo archivo')
fs.readFile('./archivo2.txt','utf-8',(err,text)=>{
    console.log('2------segundo ',text)
})

