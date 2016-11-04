import update from 'react/lib/update'

import { HELLO } from '../actions/actions'

const initialState = {
  helloClicked: false
}

export default function clicker(state = initialState, action = {}) {
  switch (action.type) {
    case HELLO:
      return Object.assign({}, state, {
        helloClicked: true
      })
    default:
      return state
  }
}
