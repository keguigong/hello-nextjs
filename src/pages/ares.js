/** @jsx jsx */
import { jsx } from 'theme-ui'

import { urlManager } from '../utils'

const Ares = () => {
  return <iframe 
    src={urlManager.getAresEmbedUrl('/admin/list')}
    sx={{
      height: '100vh',
      width: '100%',
      border: 0
    }}/>
}

export default Ares