const fs=require('node:fs')

console.log('primer archivo')
const text = fs.readFileSync('./archivo.txt','utf-8')
    console.log('1-----archivo',text)

console.log('------->  hacer cosas')

console.log('segundo archivo')
const segundotext = fs.readFileSync('./archivo2.txt','utf-8')

    console.log('2------segundo ',segundotext)


