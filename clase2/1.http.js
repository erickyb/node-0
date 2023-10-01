const http = require('node:http') // protocolo HTTP
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req,res) => {
  res.setHeader('content-type','text/html;charset=utf-8')
}

if(req.url ==='/'){
  res.end('<h1> Mi pagina </h1>')
  } else if(req.url ==='/contacto'){
    res.end('<h1> Contacto </h1>')
  }else{
res.statusCode=404
res.end('<h1> 404 </h1>')
  }

  server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`)
  })
