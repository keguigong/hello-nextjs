import React from 'react'
import Error from 'next/error'

class Page extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null
        return { statusCode }
    }

    render() {
        return (
            <Error statusCode={this.props.statusCode}/>
        )
    }
}

export default Page