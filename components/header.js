/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import Link from 'next/link'
import hex2rgba from 'hex2rgba'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHidden: false
        }
    }

    componentDidMount() {
        console.log(window.scrollY)
        window.addEventListener('scroll', this.handleWindowScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleWindowScroll)
    }

    handleWindowScroll = (event) => {
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        const clientHeight = (event.srcElement && event.srcElement.documentElement.clientHeight) || document.body.clientHeight;
        const scrollHeight = (event.srcElement && event.srcElement.documentElement.scrollHeight) || document.body.scrollHeight;
        const height = scrollHeight - scrollTop - clientHeight;
        console.log(scrollTop, clientHeight, scrollHeight, height)
        scrollTop >= 500
            ? this.setState({ isHidden: true })
            : this.setState({ isHidden: false })
    }

    render() {
        return (
            <header css={{
                position: `sticky`,
                top: this.state.isHidden ? -100 : 0,
                transition: 'all ease-in .3s',
            }}>
                <ul>
                    <li>
                        <Link href='/'>
                            <a>home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/post/[id]' as='/post/post-1'>
                            <a>post-1</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/post/[id]' as='/post/post-2'>
                            <a>post-2</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/scroll'>
                            <a>scroll</a>
                        </Link>
                    </li>
                </ul>
                <style jsx>{`
                    ul {
                        display: flex;
                    }

                    li {
                        margin-right: 10px
                    }
                `}</style>
            </header>
        )
    }
}

export default Header
