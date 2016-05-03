import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import AboutComponent from '../components/About'

class About extends Component {
  render() {
    var props = this.props

    return (
      <AboutComponent {...props} />
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
