/** @jsx jsx */
import App from 'next/app'
import { jsx, ThemeProvider, Styled } from 'theme-ui'
import { Provider as ReduxProvider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import axios from 'axios'

import theme from '../styles/theme'
import { makeStore } from '../store'

//auto read cookie when axios request
axios.defaults.withCredentials = true

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // we can dispatch from here too
    // ctx.store.dispatch(autoSignin())
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props

    return <ThemeProvider theme={theme}>
      <Styled.root>
        <ReduxProvider store={store}>
          <Component {...pageProps} />
        </ReduxProvider>
      </Styled.root>
      <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
    </ThemeProvider>
  }
}

export default withRedux(makeStore)(MyApp)