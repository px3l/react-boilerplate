import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import App from "./containers/App";
import About from "./containers/About";
import Home from "./containers/Home"

function getRoutes(store, history){
  return (
    <Provider store={store}>
      <div id="appwrapper">
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
          </Route>
        </Router>
      </div>
    </Provider>
  )
}

export default getRoutes
