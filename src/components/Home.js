import React, { Component, PropTypes } from 'react'
import MUIapp from '../containers/MUIapp'

class HomeComponent extends Component {
  render() {
    return (
      <div className="home">
      	This is the homepage. Below is an example of a material-ui app.
      	<br />
        <a href="/#/material-ui">Material-UI Table</a>
      </div>
    )
  }
}

HomeComponent.propTypes = {
  
}

export default HomeComponent
