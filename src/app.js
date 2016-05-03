import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import createHistory from 'history/lib/createHashHistory'
import { syncHistory, routeReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

/*
  reducers
*/
import * as reducers from './reducers'

import getRoutes from './routes'

/*
  history/logging
*/
const history = createHistory()
const routerMiddleware = syncHistory(history)
const loggerMiddleware = createLogger()

/*
  reducer
*/
const reducer = combineReducers({
  ...reducers,
  routing: routeReducer,
  form: formReducer
})

var middlewareArray = [
  thunkMiddleware,
  routerMiddleware
]

if(process.env.NODE_ENV==='development'){
  middlewareArray.push(loggerMiddleware)
}

/*
  store
*/
const finalCreateStore = compose(
  applyMiddleware.apply(null, middlewareArray)
)(createStore)

const store = finalCreateStore(reducer)

/*
  routes
*/
ReactDOM.render(  
  getRoutes(store, history),
  document.getElementById('mount')
)
