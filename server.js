const express = require('express')
const next = require('next')
const axios = require('axios')
const cookieParser = require('cookie-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(cookieParser('express-session-redis'))

    server.use((req, res, next) => {
      console.log('req => ', req.originalUrl)
      // console.log(JSON.stringify(req.signedCookies))
      next()
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://127.0.0.1:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })