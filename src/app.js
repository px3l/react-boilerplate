import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

import Routes from './routes'

import Reducer from './reducers/reducer'

const finalCreateStore = compose(
  applyMiddleware(
    routerMiddleware(hashHistory)
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const reducer = combineReducers({
  reducer: Reducer,
  routing: routerReducer
})

const store = finalCreateStore(reducer)
const history = syncHistoryWithStore(hashHistory, store)
const routes = Routes(store)

injectTapEventPlugin()

// ROUTES

ReactDOM.render(  
  <Provider store={store}>
    <div>
      <Router history={history}>
        {routes}
      </Router>
    </div>
  </Provider>,
  document.getElementById('mount')
)