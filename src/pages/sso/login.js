/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import JSONPretty from 'react-json-pretty'

import { domains, appId } from '../../common/domains'

const SSOLogin = () => {
  const router = useRouter()
  const { ticket } = router.query
  const [jsonObj, setJsonObj] = useState({})

  useEffect(() => {
    if (ticket) {
      axios.get('/account/verify', {
        params: {
          ticket,
          appId,
          service: domains.service
        }
      })
        .then(res => res.data)
        .then(res => setJsonObj(res))
        .catch(error => setJsonObj(error))
    }
  }, [ticket])

  const logout = () => {
    axios.get('/account/logout')
      .then(res => res.data)
      .then(res => {
        if (res.statusCode === 200) {
          window.location.href = domains.sso + '/logout'
        }
      })
  }

  const handleClick = (operation) => {
    axios.get('/account/count', {
      params: {
        operation
      }
    })
      .then(res => res.data)
      .then(res => setJsonObj(res))
      .catch(error => setJsonObj(error))
  }

  return <React.Fragment>
    <JSONPretty sx={{ overflow: 'auto' }} data={jsonObj} />
    <a className='card' onClick={logout}>登出</a>
    <button onClick={() => handleClick('plus')}>+</button>
    <button onClick={() => handleClick('minus')}>-</button>
  </React.Fragment>
}

export default SSOLogin