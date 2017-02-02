import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 12,
}

class ButtonComponent extends Component {
	render() {
		let state = this.props
		console.log("-------------------------------")
    console.log("BUTTON COMPONENT PROPS")
		console.dir(state)
		return(
				<div>
			    <RaisedButton 
			    	label={state.count.toString()}
			    	primary={true}
			    	onTouchTap={() => this.props.counter()}
			    	style={style} />
			  </div>
			)
	}
}

ButtonComponent.propTypes = {
}

export default ButtonComponent;