import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import Header from '../components/header'

export default class Father extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            count_child: 0
        }
    }

    render() {
        const { count, count_child} = this.state
        return (
            <Layout>
                <Header/>
                <h1>Father</h1>
                <h1>Self: {count}</h1>
                <h1>Child: {count_child}</h1>
                <button onClick={this.handleMinusClick}>-</button>
                <button onClick={this.handlePlusClick}>+</button>
                <Child
                    onReset={this.handleChildReset}
                    number={count}
                    onChange={this.handleChildChange}
                />
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

    handleChildChange = (count) => {
        this.setState({ count_child: count })
    }
}

class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <h1>Child</h1>
                <h1>Self: {count}</h1>
                <h1>Father: {this.props.number}</h1>
                <button onClick={this.handleMinusClick}>-</button>
                <button onClick={this.handlePlusClick}>+</button>
                <button onClick={this.handleResetClick}>RESET Father</button>
            </div>
        )
    }

    componentDidMount() {
        console.log("child")
    }

    handleMinusClick = async () => {
        await this.setState(currentState => ({ count: currentState.count - 1 }))
        this.onChange()
    }

    handlePlusClick = async () => {
        await this.setState(currentState => ({ count: currentState.count + 1 }))
        this.onChange()
    }

    handleResetClick = () => {
        this.props.onReset()
    }

    onChange = () => {
        this.props.onChange(this.state.count)
    }
}

Child.propTypes = {
    onReset: PropTypes.func,
    number: PropTypes.number
}