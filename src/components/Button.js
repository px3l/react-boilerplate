import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 12,
}

const ButtonComponent = () => (
  <div>
    <RaisedButton label="Primary" primary={true} style={style} />
  </div>
)

export default ButtonComponent;