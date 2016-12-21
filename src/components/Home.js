import React, { Component, PropTypes } from 'react'
import Table from '../containers/Table'

class HomeComponent extends Component {
  render() {
    return (
      <div className="home">
        i am home
        <Table />
      </div>
    )
  }
}

HomeComponent.propTypes = {
  
}

export default HomeComponent
