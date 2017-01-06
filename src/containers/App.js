import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class App extends Component {
  render() {

    return (
    	<MuiThemeProvider>
	      <div>
	        {this.props.children}
	      </div>
	    </MuiThemeProvider>
    )
    
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(
  mapStateToProps
)(App)
