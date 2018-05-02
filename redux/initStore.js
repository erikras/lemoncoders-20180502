const { createStore, applyMiddleware } = require('redux')
const clientMiddleware = require('./middleware/clientMiddleware')
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './modules/reducer'

const initStore = (initialState = {}, client) => {
  console.log('initStore', Object.keys(initialState))
  if (process.browser && window.__store) {
    console.info('el mismo store')
    return window.__store
  }

  const middleware = [clientMiddleware(client)]

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )

  if (process.browser) {
    window.__store = store
  }
  return store
}

export default initStore
