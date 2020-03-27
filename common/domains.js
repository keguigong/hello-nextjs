const https = 'https://'
const http = 'http://'
const protocols = {
  https,
  http
}

const welkinDomain = http + 'welkin${env}.nioint.com'
const SSODomain = https + 'login${env}.nio.com'
const udsDomain = http + 'uds${env}-int.nioapis.com'
const aresDomain = https + 'ares${env}.nioint.com'
const welkinapisDomain = http + 'welkin-gateway${env}.nioint.com:8081'

const getEnvDomain = (domain, env) => {
  const suffix = env === 'prod' ? '' : `-${env}`
  return domain.replace('${env}', suffix)
}

export { 
  welkinDomain, 
  SSODomain, 
  udsDomain, 
  aresDomain,
  welkinapisDomain,
  getEnvDomain 
}