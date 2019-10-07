import React from 'react'
import Layout from '../components/layout'

export default class App extends React.Component {
    render() {
        return (
            <Layout>
                <div style={{
                    height: `500vh`,
                }}>
                    <h1>Scroll</h1>
                </div>
            </Layout>
        )
    }
}