/** @jsx jsx */
import { jsx } from '@emotion/core'

const Layout = props => {
    return (
        <div css={{
            margin: `0 auto`,
            maxWidth: 960,
            border: `0.5px solid #e1e1e1`,
            padding: 10,
            borderRadius: 5,
            backgroundColor: `#fdfdfd`
        }}>
            {props.children}
        </div>
    )
}

export default Layout