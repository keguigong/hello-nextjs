import { UrlManager } from './url-manager'
export * from './with-auth-check'

const URLMANAGER_OPTIONS = {
  // env: 'test'
}

const urlManager = new UrlManager(URLMANAGER_OPTIONS)

export { urlManager }