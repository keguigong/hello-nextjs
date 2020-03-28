import { domain } from './domains'

const env = 'dev'

const tokenURL = domain('uds', env) + '/uds/ss/ares/v1/jwts'
const serviceURL = domain('welkin', env) + '/sso/login'
const ssoURL = domain('sso', env)
const ssoValidateURL = domain('sso', env) + '/latest/serviceValidate'
const welkinTokenURL = domain('welkinapis', env) + '/getToken'

export {
  tokenURL,
  serviceURL,
  ssoURL,
  ssoValidateURL,
  welkinTokenURL
}