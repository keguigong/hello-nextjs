import React from 'react';
import fetch from 'isomorphic-unfetch'

export default class CorsTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: true,
            data: null
        }
        this.url = 'https://api.tvmaze.com/search/shows?q=batman'
    }

    render() {
        return (
            <React.Fragment>
                <h1>Cross Origin Request</h1>
                <button onClick={this.makeFetchRequest}>fetch()</button>
                <button onClick={this.makeXMLRequest}>XMLHttpRequest()</button>
                {this.state.isLoaded ?
                    <p>{this.state.data ? JSON.stringify(this.state.data) : ''}</p> :
                    <p>loading...</p>}
            </React.Fragment>
        )
    }

    makeFetchRequest = () => {
        this.setState({ isLoaded: false })
        fetch(`${this.url}`)
            .then(res => {
                // console.log('status:', res.status)
                return res.json()
            })
            .then(result => {
                this.setState({ data: result, isLoaded: true })
                // console.log(result)
            })
            .catch(error => {
                console.log(error)
                this.setState({ isLoaded: true })
            })
    }

    makeXMLRequest = () => {
        this.setState({ isLoaded: false })
        let request = new XMLHttpRequest()
        request.onload = (e) => {
            console.log('status:', request.status, JSON.parse(request.response))
            this.setState({ data: JSON.parse(request.response), isLoaded: true })
        }
        request.onerror = (e) => {
            console.log(e)
            this.setState({ isLoaded: false })
        }
        request.open('GET', `${this.url}`, true)
        request.send()
    }
}