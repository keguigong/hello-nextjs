/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

export default class Father extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            countSelf: 0,
            countChild: 0
        }
    }

    render() {
        const { count, countSelf, countChild } = this.state
        console.log('father: render()')
        return (
            <Wrapper>
                <h3>Father</h3>
                <p>{`count: ${count}`}</p>
                <p>{`countSelf: ${countSelf}`}</p>
                <p>{`countChild: ${countChild}`}</p>
                <span>count: </span>
                <button onClick={this.handleMinusClick}>-</button>
                <button onClick={this.handlePlusClick}>+</button>
                <span>countSelf: </span>
                <button onClick={this.handleCountSelfPlusClick}>+</button>
                <Child
                    onReset={this.handleChildReset}
                    countFather={count}
                    onChange={this.handleChildChange}
                />
            </Wrapper>
        )
    }

    handleMinusClick = () => {
        this.setState(currentState => ({ count: currentState.count - 1 }))
    }

    handlePlusClick = () => {
        this.setState(currentState => ({ count: currentState.count + 1 }))
    }

    handleCountSelfPlusClick = () => {
        this.setState(currentState => ({ countSelf: currentState.countSelf + 1 }))
    }

    handleChildReset = () => {
        this.setState({ count: 0 })
    }

    handleChildChange = (count) => {
        this.setState({ countChild: count })
    }
}

class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            countFather: props.countFather ? props.countFather : 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('child: getDerivedStateFromProps()')
        const { countFather } = props
        return {
            countFather
        }
    }

    render() {
        const { count, countFather } = this.state
        console.log('child: render()')
        return (
            <Wrapper>
                <h3>Child</h3>
                <p>{`count: ${count}`}</p>
                <p>{`countFather: ${countFather}`}</p>
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