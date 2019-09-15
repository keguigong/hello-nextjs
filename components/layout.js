/** @jsx jsx */
import { jsx } from '@emotion/core'

const Layout = props => {
    return (
        <div css={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: 10,
        }}>
            {props.children}
            <style global jsx>{`
                body {
                    margin: 0;
                    color: #00263c
                }

                h1, a {
                    font-family: 'Arial', 'Times';
                }

                ul {
                    padding: 0;
                }

                li {
                    list-style: none;
                    margin: 5px 0;
                }

                a {
                    transition: all ease-in .2s;
                    text-decoration: none;
                    color: #4285f4;
                }

                a:hover {
                    opacity: 0.6;
                }
            `}</style>
        </div>
    )
}

export default Layout