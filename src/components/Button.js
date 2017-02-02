import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 12,
}

class ButtonComponent extends Component {
	render() {
		let state = this.props.count
		console.log("-------------------------------")
    console.log("BUTTON COMPONENT PROPS")
		console.dir(state)
		return(
				<div>
			    <RaisedButton 
			    	label={state.toString()}
			    	primary={true}
			    	onTouchTap={this.props.buttonCount}
			    	style={style} />
			  </div>
			)
	}
}

ButtonComponent.propTypes = {
}

export default ButtonComponent;