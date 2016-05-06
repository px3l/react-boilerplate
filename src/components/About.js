import React, { Component, PropTypes } from 'react'

class AboutComponent extends Component {
  render() {
    return (
      <div className="wrapper" onClick={this.props.onClick}>
        i am about
      </div>
    )
  }
}

AboutComponent.propTypes = {
  
}

export default AboutComponent
