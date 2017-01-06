import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import MUIappComponent from '../components/MUIapp'

class MUIapp extends Component {
  render() {
    var props = this.props

    return (
      <MUIappComponent {...props} />
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
)(MUIapp)
