import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Layout from '../components/Layout'

export class App extends Component {
  render() {

    return (
      <Layout urls={this.props.urls}>
        {this.props.children}
      </Layout>
    )
    
  }
}

function mapStateToProps(state) {

  return {
    urls:state.urls
  }

}

export default connect(
  mapStateToProps
)(App)
