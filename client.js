const superagent = require('superagent')
const { apiPort } = require('./config')

const formatUrl = path =>
  process.browser ? `/api${path}` : `http://localhost:${apiPort}${path}`

let cachedClient

const initClient = cookie => {
  if (cachedClient) {
    return cachedClient
  }

  const send = async request => {
    if (cookie) {
      request.set('Cookie', cookie)
    }
    request.accept('json')
    try {
      const response = await request
      return response.body
    } catch (error) {
      if (error.status === 404) {
        return null
      }
      if (error.response.body) {
        throw error.response.body
      }
      throw error
    }
  }

  const client = {
    get: (path, params = {}) =>
      send(superagent.get(formatUrl(path)).query(params)),

    post: (path, data = {}) =>
      send(
        superagent
          .post(formatUrl(path))
          .type('json')
          .send(data)
      )
  }
  if (process.browser) {
    cachedClient = client
  }
  return client
}

export default initClient
