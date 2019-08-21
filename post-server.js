const http = require('http')

const server = http.createServer((req, res) => {
    if (req.method == 'POST') {
        let body = ''
        req.on('data', (data) => {
            body += data
            // console.log(body)
        })
        req.on('end', () => {
            console.log(body)
            res.writeHead(200, { 'Content-Type': 'text/json' })
            res.end(JSON.stringify({message: '', body: JSON.parse(body)}))
        })
    }
})

const port = 9098
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)