import React, { Component, PropTypes } from 'react'

import AppBar from 'material-ui/AppBar'
import Button from '../containers/Button'

class HomeComponent extends Component {
  render() {
    return (
      <div className="home">
        <AppBar
          title="React + Redux + Material UI Boiler Plate"
        />
        Here is a button that increments using an action and reducer
        <Button />
      </div>
    )
  }
}

HomeComponent.propTypes = {
  
}

export default HomeComponent
