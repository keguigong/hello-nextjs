import { UrlManager } from './url-manager'

const URLMANAGER_OPTIONS = {
  env: 'test'
}

const urlManager = new UrlManager(URLMANAGER_OPTIONS)

export { urlManager }