import update from 'react/lib/update'

import { BUTTON_COUNT } from '../actions/actions'

const initialState = {
  number: 0
}

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case BUTTON_COUNT:
      return Object.assign({}, state, {
        number: number++
      })
    default:
      return state
  }
}
