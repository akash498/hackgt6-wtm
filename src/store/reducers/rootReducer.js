import profileReducer from './profileReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    profile: profileReducer
});

export default rootReducer