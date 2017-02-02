import update from 'react/lib/update'
import * as actions from '../actions/actions'

const initialState = {
  count: 0
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case actions.BUTTON_COUNT:
      return update(state, {
        count: count++
      })

    default:
      return state
  }
}
