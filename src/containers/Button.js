import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ButtonComponent from '../components/Button'

import { BUTTON_COUNT } from '../actions/actions'

class Button extends Component {
  render() {
    var props = this.props

    return (
      <ButtonComponent {...props} />
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
)(Button)
