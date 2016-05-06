import React, { Component, PropTypes } from 'react'

class LayoutComponent extends Component {
  render() {
    return (
      <div className="wrapper">
        {this.props.children}
      </div>
    )
  }
}

LayoutComponent.propTypes = {
  
}

export default LayoutComponent
