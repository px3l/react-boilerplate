import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import TableComponent from '../components/Table'

class Home extends Component {
  render() {
    var props = this.props

    return (
      <TableComponent {...props} />
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
)(TableComponent)
