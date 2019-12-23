import { createStore, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from './root-reducer'

//Saver middleware add by myself
// const saver = store => next => action => {
//   let result = next(action)
//   localStorage.setItem('redux-store', JSON.stringify(store.getState()))
//   return result
// }


//Redux middlewares
const dev = process.env.NODE_ENV !== 'production'
const middlewares = dev ?
  [reduxThunk, createLogger({ collapsed: true })] :
  [reduxThunk]


//Redux Devtools for Google Chrome
const composeEnhancers = (typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    trace: true
  }) :
  compose
const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
)

//Redux Store
export const makeStore = (initialState, options) => {
  return createStore(
    rootReducer,
    initialState,
    enhancer
  )
}