import React, { Component, PropTypes } from 'react'

import MUIapp from '../containers/MUIapp'
import Button from '../containers/Button'

class HomeComponent extends Component {
  render() {
    return (
      <div className="home">
        Here is a Material UI component example
        <MUIapp />
        <br />
        And here is a button that increments using an action and reducer
        <Button />
      </div>
    )
  }
}

HomeComponent.propTypes = {
  
}

export default HomeComponent
