import authReducer from './authReducer'
import profileReducer from './profileReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer
});

export default rootReducer