import { readFile }  from 'node:fs/promises'

Promise.all([
    readFile('./archivo.txt','utf-8'),
    readFile('./archivo2.txt','utf-8')

]).then(([text,segundotext]) => {
    console.log('1-----archivo',text)
    console.log('2------segundo ',segundotext)

})
   
 
