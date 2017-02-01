import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import App from "./containers/App"
import Home from "./containers/Home"

function getRoutes(store, history){
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  )
}

export default getRoutes
