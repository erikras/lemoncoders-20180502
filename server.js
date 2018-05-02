const express = require('express')
const next = require('next')
const httpProxy = require('http-proxy')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const { port, apiPort } = require('./config')
const target = `http://localhost:${apiPort}`
const proxy = httpProxy.createProxyServer({ target })

app.prepare().then(() => {
  const server = express()

  server.use('/api', (req, res) => {
    proxy.web(req, res, { target })
  })
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Render server ready on http://localhost:${port}`)
  })
})
