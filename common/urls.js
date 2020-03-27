import {
  welkinDomain,
  SSODomain,
  udsDomain,
  welkinapisDomain,
  getEnvDomain
} from './domains'

const env = 'dev'

const tokenURL = getEnvDomain(udsDomain, env) + '/uds/ss/ares/v1/jwts'
const serviceURL = getEnvDomain(welkinDomain, env) + '/sso/login'
const ssoURL = getEnvDomain(SSODomain, env)
const ssoValidateURL = getEnvDomain(SSODomain, env) + '/latest/serviceValidate'
const welkinTokenURL = getEnvDomain(welkinapisDomain, env) + '/getToken'

export {
  tokenURL,
  serviceURL,
  ssoURL,
  ssoValidateURL,
  welkinTokenURL
}