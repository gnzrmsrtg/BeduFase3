const http = require('http')
const hostname = 'localhost'
const port = 3003

const responsePing = {
    success: true,
    body: 'pong'
}

const responseHealth = {
    success: true,
    body: {
        version: '1.0.0',
        launchDate: 'today'
    }
}

const responseNormal = {
    body: 'Bedu API V1'
}


const server = http.createServer((req, res) => {
    if (req.url === '/ping') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(responsePing))
    } else if (req.url === '/health') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(responseHealth))
    } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(responseNormal))
    }
})

server.listen(port, hostname, () => {
    console.log('Servidor corriendo como loco')
})