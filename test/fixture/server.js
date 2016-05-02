const http = require('http')

http
.createServer(function (request, response) {
  response.end('balabala')
})
.listen(8080)
