//remove domains from code, replace to yours
import domainObj from '../../config/domains.json'
import appIdObj from '../../config/appid.json'

const getEnvDomain = (domain, env = 'dev') => {
  let suffix = env === 'prod' ? '' : `-${env}`
  return domain.replace(new RegExp(/\$\{env\}?/, 'g'), suffix)
}

let domains = {}
for (let i = 0; i < Object.keys(domainObj).length; i++) {
  domains = {
    ...domains,
    [Object.keys(domainObj)[i]]: getEnvDomain(domainObj[Object.keys(domainObj)[i]])
  }
}

let appId = appIdObj.appId

export { domains, appId }