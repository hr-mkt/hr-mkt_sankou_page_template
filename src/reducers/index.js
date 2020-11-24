import { combineReducers } from 'redux'
// import signIn from './signIn'

const app = (state = {}, action) => {
    let newState = Object.assign({}, state)
    if(action.type === 'TOGGLE_SIDE_BAR'){
        newState.sideBar = action.bool
    }
    if(action.type === 'TICK'){
        newState.light = action.light
        newState.lastUpdate = action.lastUpdate

    }
    if(action.type === 'EXECUTE_MORPHOLOGICAL_ANALYSYS_END'){
        newState.tokenized = action.tokenized
    }
    if(action.type === 'SETUP_TOKENIZER_END'){
        newState.tokenizer = 'ready'
    }
    return newState
}

const rootReducer = combineReducers({
    app
})

export default rootReducer
