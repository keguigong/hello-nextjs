import React from 'react';
import fetch from 'isomorphic-unfetch'

export default class CorsTest extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render() {
        return (
            <div>
                <h1>Cross Origin</h1>
                <button onClick={this.makeFetchRequest}>makeFetchRequest</button>
                <button onClick={this.makeXMLRequest}>makeXMLRequest</button>
            </div>
        )
    }

    makeFetchRequest = () => {
        fetch(`http://127.0.0.1:8000/demoapp`, {
            method: 'GET',
            headers: {
                'My-Heder': '6a9sdnahasw6bnnkout'
            }
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
        .catch(error => console.log(error))
    }

    makeXMLRequest = () => {
        let request = new XMLHttpRequest()
        request.open('GET', 'http://127.0.0.1:8000/demoapp', true)
        request.send()
    }
}