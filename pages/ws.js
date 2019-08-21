import React from 'react'

const WebSocket = require('isomorphic-ws')

// var ws = new WebSocket("ws://192.168.1.186:1234");
// var wsOpened = false

export default class Client extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            data: []
        }
        this.serverWire = "192.168.1.201"
        this.serverWifi = "192.168.43.1"
        this.ws = new WebSocket(`ws://127.0.0.1:8080`)
        this.sendData = this.sendData.bind(this)
    }

    componentDidMount() {
        this.ws.onopen = () => {
            this.setState({
                isOpen: true
            })
            console.log("Connected")
        }

        this.ws.onmessage = (message) => {
            console.log(message.data);
            this.setState({
                data: JSON.stringify(message.data)
            })
        }
    }

    sendData() {
        if (this.state.isOpen) {
            this.ws.send(JSON.stringify({ type: 'greet', payload: 'Hello Mr. Server!' }))
            console.log(`client send a message`)
        } else {
            console.log("Websocket has not opened!")
        }
    }

    render() {
        return (
            <div>
                <h1>hey!</h1>
                <button onClick={() => {this.sendData()}}>sendData</button>
            </div>
        )
    }
}