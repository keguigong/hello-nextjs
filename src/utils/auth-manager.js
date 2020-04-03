const axios = require('axios')

class AuthManager {
  constructor() {

  }

  checkLoginMiddleware(req, res, next) {
    axios.get('/sso/sessions')
      .then(result => result.data)
      .then(result => {
        next()
      })
      .catch(error => res.redirect('www.baidu.com'))
  }
}

module.exports = { AuthManager }