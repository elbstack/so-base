import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from './promise'
import array from './array'
import reducers from '../reducers'
import createLogger from 'redux-logger'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true
})

const createSOStore = applyMiddleware(thunk, promise, array, logger)(createSOStore)

function configureStore(onComplete: ?() => void) {
  // TODO(frantic): reconsider usage of redux-persist, maybe add cache breaker
  const store = autoRehydrate()(createStore)(reducers)
  const persistConfig = {
    storage: AsyncStorage,
    blacklist: []
  }
  persistStore(store, persistConfig, onComplete)
  if (isDebuggingInChrome) {
    window.store = store
  }
  return store
}

export default configureStore
