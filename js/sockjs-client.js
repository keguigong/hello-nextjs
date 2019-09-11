const SockJS = require('sockjs-client')
const Stomp = require('stompjs')

const jsonStr = {
    name: 'Hello Server',
    type: 'test',
    content: [
        'content-1',
        'content-2',
        'content-3',
        'content-4'
    ]
}

const sock = new SockJS('http://10.132.196.2:6180/ws')
// sock.onopen(() => {
//     console.log("asdasdasdasda")
// })
const client = Stomp.over(sock);
client.connect({}, (frame) => {
    console.log(frame)
    client.subscribe('/test/llw', (message) => {
        console.log(message.body)
    })
})

setInterval(() => {
    client.send(`/app/hello`, {}, 'llw')
}, 2000)

console.log(JSON.stringify(jsonStr))