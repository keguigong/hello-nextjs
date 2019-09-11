import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'

export default class App extends React.Component {
    render() {
        return (
            <Layout>
                <Header/>
                <ul>
                    <li>
                        <Link href={`/`}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/about`}>
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </Layout>
        )
    }
}