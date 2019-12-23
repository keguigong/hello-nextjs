/** @jsx jsx */
import App from 'next/app'
import { jsx, ThemeProvider } from 'theme-ui'
import { Provider as ReduxProvider } from 'react-redux'
import withRedux from 'next-redux-wrapper'


import theme from '../styles/theme'
import { makeStore } from '../store'

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
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </ThemeProvider>
  }
}

export default withRedux(makeStore)(MyApp)