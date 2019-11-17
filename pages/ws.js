import React from 'react'
import WebSocket from 'isomorphic-ws'
import Layout from '../components/layout'

export default class Client extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            data: null
        }
    }

    componentDidMount() {
        this.ws = new WebSocket('ws://127.0.0.1:8080')
        this.ws.onopen = () => {
            this.setState({
                isOpen: true
            })
            console.log('Connected')
        }

        this.ws.onerror = (error) => console.log(error)

        this.ws.onmessage = (message) => {
            console.log(message.data);
            this.setState({
                data: JSON.stringify(message.data)
            })
        }
    }

    sendData = () => {
        if (this.state.isOpen) {
            this.ws.send(JSON.stringify({ type: 'greet', payload: 'Hello Server!' }))
            console.log('MSG SENT')
        } else {
            console.log('WS NOT OPENED')
        }
    }

    render() {
        return (
            <Layout>
                <h1>Websocket Client</h1>
                <button onClick={() => { this.sendData() }}>sendData</button>
            </Layout>
        )
    }
}