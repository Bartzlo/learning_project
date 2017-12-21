const http = require('http')
const nodeStatic = require('node-static')
const file = new nodeStatic.Server('./build', {cache: false})

function accept (req, res) {
  let {headers, method, url} = req
  let body = []

  req.on('error', err => {
    console.error('ERROR: ' + err.stack)
  }).on('data', chunk => {
    body.push(chunk)
  }).on('end', () => {
    file.serve(req, res)
    console.log(new Date().toLocaleString('ru') + ': ' + req.connection.remoteAddress)
  })
}

http.createServer(accept).listen(666)

console.log('Server is listen port 666')
