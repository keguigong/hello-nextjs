/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import xml2js from 'xml2js'
import JSONPretty from 'react-json-pretty'

import { ssoURL, serviceURL, ssoValidateURL, welkinTokenURL } from '../../common/urls'

let appId = '100278'
let secret = '481ed4c430584Eb5541908320EbA5E3d'

const SSOLogin = ({
  ...rest
}) => {
  const router = useRouter()
  const { ticket } = router.query
  const [profile, setProfile] = useState({})

  // useEffect(() => {
  //   if (ticket) {
  //     axios.get(ssoValidateURL, {
  //       params: {
  //         ticket: ticket,
  //         service: serviceURL
  //       }
  //     })
  //       .then(res => xml2js.parseStringPromise(res.data))
  //       .then(res => {
  //         try {
  //           if (res['cas:serviceResponse']['cas:authenticationFailure']) {
  //             const failureInfo = res['cas:serviceResponse']
  //               ['cas:authenticationFailure'][0]
  //               ['$']
  //             setProfile(failureInfo)
  //             return
  //           }

  //           const rawInfo = res['cas:serviceResponse']
  //             ['cas:authenticationSuccess'][0]
  //             ['cas:attributes'][0]
  //             ['cas:info']
  //           let userInfo = {}
  //           try {
  //             userInfo = JSON.parse(rawInfo)
  //           } catch (e) {
  //             //
  //           }

  //           const { access_token: accessToken } = userInfo
  //           if (accessToken) {
  //             setProfile(userInfo)
  //           }
  //         } catch (error) {
  //           setProfile({ error })
  //         }
  //       }).catch(error => setProfile({ error }))
  //   } else {
  //     window.location.href = `${ssoURL + '?service=' + serviceURL}`
  //   }
  // }, [ticket])

  useEffect(() => {
    if (ticket) {
      axios.get(welkinTokenURL, {
        params: {
          ticket,
          appId
        },
        onDownloadProgress: e => {
          let percentage = e.loaded / e.total
          console.log(e.lengthComputable, percentage)
        }
      })
        .then(res => res.data)
        .then(res => setProfile(res))
        .catch(error => setProfile(error))
    } else {
      window.location.href = `${ssoURL + '?service=' + serviceURL}`
    }
  }, [ticket])

  return <React.Fragment>
    <div className='card'>
      <JSONPretty sx={{
        overflow: 'auto'
      }} data={profile} />
    </div>
    <div className='grid'>
      <a className='card' href={ssoURL + '/logout?service=' + serviceURL}>登出</a>
    </div>
  </React.Fragment>
}

export default SSOLogin