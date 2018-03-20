import React, { Component, PropTypes } from 'react'

import AppBar from 'material-ui/AppBar'
import Button from '../containers/Button'

class HomeComponent extends Component {
  render() {

    return (
      <div>
        <AppBar
          title="Uppy Uploader Demo"
        />
        <br />
        Upload your shit with Uppy below
        <Button style={{ display: 'inline-block', padding: '20px' }}/>
      </div>
    )
  }
}

HomeComponent.propTypes = {
  
}

export default HomeComponent
