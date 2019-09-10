import React from 'react'

import Layout from '../components/layout'
import Child from './child'

export default class Father extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    render() {
        const { count } = this.state
        return (
            <Layout>
                <h1>Father</h1>
                <h1>{count}</h1>
                <button onClick={this.handleMinusClick}>-</button>
                <button onClick={this.handlePlusClick}>+</button>
                <Child onReset={this.handleChildReset} number={count}/>
            </Layout>
        )
    }

    handleMinusClick = () => {
        this.setState(currentState => ({ count: currentState.count - 1 }))
    }

    handlePlusClick = () => {
        this.setState(currentState => ({ count: currentState.count + 1 }))
    }

    handleChildReset = () => {
        this.setState({ count: 0 })
    }
}