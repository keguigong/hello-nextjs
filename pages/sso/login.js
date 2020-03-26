import React, { useEffect, useState } from 'react'
import { withRouter } from 'next/router'
import axios from 'axios'
import xml2js from 'xml2js'
import JSONPretty from 'react-json-pretty'
import { getSSODomain, getSSOService, getSSOTicketValidate } from '../../common/urls'

let appId = '100278'
let secret = '481ed4c430584Eb5541908320EbA5E3d'

const SSOLogin = ({
  router,
  ...rest
}) => {
  const { ticket } = router.query
  const [profile, setProfile] = useState({})

  useEffect(() => {
    if (ticket) {
      axios.get(getSSOTicketValidate, {
        params: {
          ticket: ticket,
          service: getSSOService
        }
      })
        .then(res => xml2js.parseStringPromise(res.data))
        .then(res => {
          try {
            if (res['cas:serviceResponse']['cas:authenticationFailure']) {
              const failureInfo = res['cas:serviceResponse']
                ['cas:authenticationFailure'][0]
                ['$']
              setProfile(failureInfo)
              return
            }

            const rawInfo = res['cas:serviceResponse']
              ['cas:authenticationSuccess'][0]
              ['cas:attributes'][0]
              ['cas:info']
            let userInfo = {}
            try {
              userInfo = JSON.parse(rawInfo)
            } catch (e) {
              //
            }

            const { access_token: accessToken } = userInfo
            if (accessToken) {
              setProfile(userInfo)
            }
          } catch (error) {
            setProfile({ error })
          }
        }).catch(error => setProfile({ error }))
    } else {
      window.location.href = `${getSSODomain + '?service=' + getSSOService}`
    }
  }, [ticket])

  return <React.Fragment>
    <div className='card'>
      <JSONPretty data={profile} />
    </div>
    <a className='card' href={getSSODomain + '/logout?service=' + getSSOService}>登出</a>
  </React.Fragment>
}

export default withRouter(SSOLogin)