import { HELLO } from '../actions/hello'

const initialState = {
  helloClicked: false
}

export default function update(state = initialState, action = {}) {
  switch (action.type) {
    case HELLO:
      return Object.assign({}, state, {
        helloClicked: true
      })
    default:
      return state
  }
}
