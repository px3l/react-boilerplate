import React, { Component, PropTypes } from 'react'

import AppBar from 'material-ui/AppBar'
import Button from '../containers/Button'

class HomeComponent extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="React + Redux + Material UI App"
        />
        <br />
        Here is a button that increments using an action and reducer
        <Button style={{ display: 'inline-block', padding: '20px' }}/>
      </div>
    )
  }
}

HomeComponent.propTypes = {
  
}

export default HomeComponent
