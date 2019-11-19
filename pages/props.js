/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'

export default class Father extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            count_child: 0
        }
    }

    render() {
        const { count, count_child } = this.state
        return (
            <Layout>
                <Wrapper>
                    <h3>Father</h3>
                    <p>{`Self: ${count}`}</p>
                    <p>{`Child: ${count_child}`}</p>
                    <button onClick={this.handleMinusClick}>-</button>
                    <button onClick={this.handlePlusClick}>+</button>
                    <Child
                        onReset={this.handleChildReset}
                        count_father={count}
                        onChange={this.handleChildChange}
                    />
                </Wrapper>
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
            count: 0,
            count_father: props.count_father ? props.count_father : 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        const { count_father } = props
        return{
            count_father
        }
    }

    render() {
        const { count, count_father } = this.state
        return (
            <Wrapper>
                <h3>Child</h3>
                <p>{`Self: ${count}`}</p>
                <p>{`Father: ${count_father}`}</p>
                <button onClick={this.handleMinusClick}>-</button>
                <button onClick={this.handlePlusClick}>+</button>
                <button onClick={this.handleResetClick}>RESET Father</button>
            </Wrapper>
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

const Wrapper = props => (
    <div css={{
        border: `0.5px solid #cfcfcf`,
        borderRadius: 5,
        margin: 10,
        padding: 20
    }}>
        {props.children}
    </div>
)