import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import HomeComponent from '../components/Home'

class Home extends Component {
  render() {
    var props = this.props

    return (
      <HomeComponent {...props} />
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
)(Home)
