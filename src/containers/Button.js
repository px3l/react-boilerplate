import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ButtonComponent from '../components/Button'

import * as actions from '../actions/actions'

class Button extends Component {
  render() {
    var props = this.props

    console.log("-------------------------------")
    console.log("BUTTON CONTAINER PROPS")
    console.dir(props)
    
    return (
      <ButtonComponent {...props} />
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.reducer.count
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    counter: () => {
      dispatch(actions.buttonCount())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
