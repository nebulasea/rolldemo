import {UPDATE_RESULTS} from '../actions/types.js'

export default function reducer(state = '', action) {
  switch (action.type) {
    case UPDATE_RESULTS:
      return action.payload.value
      break;

    default:
      return state
      break;
  }
}