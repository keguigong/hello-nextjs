const https = 'https://'
const http = 'http://'
const protocols = {
  https,
  http
}

const welkinDomain = https + 'welkin${env}.nioint.com'
const SSODomain = https + 'login${env}.nio.com'
const udsDomain = http + 'uds${env}-int.nioapis.com'

const getEnvDomain = (domain, env) => {
  const suffix = env === 'prod' ? '' : `-${env}`
  return domain.replace('${env}', suffix)
}

export { welkinDomain, SSODomain, udsDomain, getEnvDomain }