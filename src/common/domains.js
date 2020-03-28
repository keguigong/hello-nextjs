const domainObj = {
  welkin: 'http://welkin${env}.nioint.com',
  sso: 'https://login${env}.nio.com',
  uds: 'http://uds${env}-int.nioapis.com',
  ares: 'http://ares${env}.nioint.com',
  welkinapis: 'http://welkin-gateway${env}.nioint.com:8081'
}

const domain = (domain, env) => {
  const aaa = domainObj[domain] || ''
  const suffix = env === 'prod' ? '' : `-${env}`
  return aaa.replace('${env}', suffix)
}

export {
  domainObj,
  domain
}