import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'

export default class Child extends React.Component {
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
                <h1>Child</h1>
                <h1>{count}</h1>
                <h1>{this.props.number}</h1>
                <button onClick={this.handleMinusClick}>-</button>
                <button onClick={this.handlePlusClick}>+</button>
                <button onClick={this.handleResetClick}>RESET</button>
            </Layout>
        )
    }

    componentDidMount() {
        console.log("child")
    }

    handleMinusClick = () => {
        this.setState(currentState => ({ count: currentState.count - 1 }))
    }

    handlePlusClick = () => {
        this.setState(currentState => ({ count: currentState.count + 1 }))
    }

    handleResetClick = () => {
        this.props.onReset()
    }
}

Child.propTypes = {
    onReset: PropTypes.func,
    number: PropTypes.number
}