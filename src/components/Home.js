import React, { Component, PropTypes } from 'react'
import Graph from 'graph'

class HomeComponent extends Component {
  render() {
    return (
      <div className="home">
        i am home
        <Graph />
      </div>
    )
  }
}

HomeComponent.propTypes = {
  
}

export default HomeComponent
