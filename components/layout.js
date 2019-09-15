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
                h1,
                a {
                font-family: 'Times';
                }

                ul {
                padding: 0;
                }

                li {
                list-style: none;
                margin: 5px 0;
                }

                a {
                text-decoration: none;
                color: blue;
                }

                a:hover {
                opacity: 0.6;
                }
            `}</style>
        </div>
    )
}

export default Layout