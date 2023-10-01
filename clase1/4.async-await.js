const {readFile} = require('node:fs/promises')
//esto va de forma secuencial 
async function init(){
    console.log('primer archivo')
    const text = await readFile('./archivo.txt','utf-8')
     console.log('1-----archivo',text)
   
    console.log('------->  hacer cosas')

    console.log('segundo archivo')
    const segundotext = await readFile('./archivo2.txt','utf-8')
    console.log('2------segundo ',segundotext)
    
}
 init()


