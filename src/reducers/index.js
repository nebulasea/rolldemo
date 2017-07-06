import {combineReducers} from 'redux'
import resultsReducer from './reducer-dice'
export default combineReducers({results: resultsReducer})