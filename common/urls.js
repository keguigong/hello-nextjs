import {
  welkinDomain,
  SSODomain,
  udsDomain,
  getEnvDomain
} from './domains'

const env = 'dev'
const getAresTokenParam = getEnvDomain(udsDomain, env) + '/uds/api/ares/v1/jwts'
const getSSOService = getEnvDomain(welkinDomain, env) + '/sso/login'
const getSSODomain = getEnvDomain(SSODomain, env)
const getSSOTicketValidate = getEnvDomain(SSODomain, env) + '/latest/serviceValidate'

export {
  getAresTokenParam,
  getSSOService,
  getSSODomain,
  getSSOTicketValidate
}