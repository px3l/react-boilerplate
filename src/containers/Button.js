import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ButtonComponent from '../components/Button'

import * as actions from '../actions/actions'

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
    number: state.number
  }
}

function mapDispatchToProps(dispatch) {
  return {
    incrementButtonCount: (number) => {
      dispatch(actions.buttonCount())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
