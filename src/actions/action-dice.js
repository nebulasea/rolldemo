import {UPDATE_RESULTS} from './types.js'
export function updateDice(value) {
  return {type: UPDATE_RESULTS, payload: value}
}