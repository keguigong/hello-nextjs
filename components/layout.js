/** @jsx jsx */
import { jsx } from '@emotion/core'
import Header from './header'
import Footer from './footer'

const Layout = props => {
    return (
        <div css={{
            display: `flex`,
            flexDirection: `column`,
            margin: '0 auto',
            maxWidth: 960,
            minHeight: '100vh',
            padding: 10,
        }}>
            <Header />
            <div css={{
                flexGrow: 1
            }}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout