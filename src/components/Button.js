import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 12,
}

const ButtonComponent = () => (
  <div>
    <RaisedButton label={this.props.number} primary={true} style={style} />
  </div>
)

export default ButtonComponent;