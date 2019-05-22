
import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState=fromJS({
    id:"",
    title:"",
    content:""
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_DETAIL:
        return state.merge({
            id:action.id,
            title:action.title,
            content:action.content
        })
        default: return state;
    }
}
