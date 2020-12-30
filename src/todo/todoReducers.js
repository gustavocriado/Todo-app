import {DESCRIPTION_CHANGED,TODO_SEARCHED,TODO_ADDED,TODO_CLEAR} from './actionTypes'

const INICIAL_STATE = {description: '',list: []}

export default (state = INICIAL_STATE, action) => {
    switch(action.type){
        case DESCRIPTION_CHANGED : 
            return{...state, description: action.payload}
        case TODO_SEARCHED : 
            return{...state,list: action.payload}
        case TODO_CLEAR:
            return{...state,description: ''}
        default: return state
    }
}