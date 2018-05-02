const express = require('express')
const session = require('express-session')

const { apiPort } = require('../config')

const server = express()

server.use(
  session({
    secret: 'LEMONCODERSSODIJFSOIDJDGIOJ',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
)

server.get('/test', require('./endpoints/test'))

server.listen(apiPort, err => {
  if (err) throw err
  console.log(`> API Server ready on http://localhost:${apiPort}`)
})
