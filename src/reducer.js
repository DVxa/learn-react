import gridReducer from './reducers/grid-reducer';
// import {combineReducers} from 'redux'

export default function rootReducer(state = {}, action) {
    return {
        ...state,
        users: gridReducer(state.users, action)
    };
}