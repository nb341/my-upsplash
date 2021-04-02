import * as ActionTypes from './ActionTypes';
const INITIAL_STATE = {
    text: ""
  }

  //reducer
  
  export const Search = (state = {txt: '', len:0} , action) => {
    switch(action.type){
        case ActionTypes.SEARCH_INPUT:
          return action.payload
        default:
          return state
    }
  }