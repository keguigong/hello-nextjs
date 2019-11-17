import React from 'react';
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'

export default class CorsTest extends React.Component {
    constructor(props){
        super(props)
        this.url = 'https://api.tvmaze.com/search/shows?q=batman'
    }

    render() {
        return (
            <Layout>
                <h1>Cross Origin Request</h1>
                <button onClick={this.makeFetchRequest}>makeFetchRequest</button>
                <button onClick={this.makeXMLRequest}>makeXMLRequest</button>
            </Layout>
        )
    }

    makeFetchRequest = () => {
        fetch(`${this.url}`)
        .then(res => {
            console.log('status:', res.status)
            return res.json()
        })
        .then(result => {
            console.log(result)
        })
        .catch(error => console.log(error))
    }

    makeXMLRequest = () => {
        let request = new XMLHttpRequest()
        request.onload = (e) => console.log('status:', request.status, JSON.parse(request.response))
        request.onerror = (e) => console.log(e)
        request.open('GET', `${this.url}`, true)
        request.send()
    }
}