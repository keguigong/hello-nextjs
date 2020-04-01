/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Spinner, Flex } from '@theme-ui/components'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import { domains } from '../../common/domains'

const SSOLogin = () => {
  const router = useRouter()
  const { ticket } = router.query

  useEffect(() => {
    if (ticket) {
      axios.get('/account/sso', { params: { ticket } })
        .then(res => res.data)
        .then(res => {
          router.replace('/')
        })
        .catch(error => {
          // window.location.href = domains.ssoLogin
        })
    } else {
      // window.location.href = domains.ssoLogin
    }
  }, [ticket])

  return <React.Fragment>
    <Flex sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Spinner strokeWidth={2} />
    </Flex>
  </React.Fragment>
}

export default SSOLogin