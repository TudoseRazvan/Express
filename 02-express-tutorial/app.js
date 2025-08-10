const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': text/html})
    res.end('<h1>Hello World from Node.js server!</h1>')
})

server.listen(5000)

