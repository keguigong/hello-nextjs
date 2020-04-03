/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Spinner } from '@theme-ui/components'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { urlManager } from '../common'

const withAuthCheck = (ComposedComponent) => {
  const AuthCheck = ({ ...rest }) => {
    const [isLoggedin, setIsLoggedin] = useState(false)

    useEffect(() => {
      axios.get('/api/sessions')
        .then(res => res.data)
        .then(res => {
          setIsLoggedin(true)
        })
        .catch(error => window.location.href = urlManager.getSSOLoginUrl())
    }, [])

    if (isLoggedin) {
      return <ComposedComponent {...rest} />
    }
    return <Flex sx={{
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Spinner strokeWidth={1} />
    </Flex>
  }
  return AuthCheck
}

export { withAuthCheck }