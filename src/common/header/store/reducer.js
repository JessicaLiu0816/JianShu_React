import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';


//运用fromJS()把js对象转为immutable对象
const defaultState=fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
})
export default (state=defaultState,action)=>{

    switch(action.type){
        case actionTypes.SEARCH_FOCUS: return state.set('focused',true);//immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
        case actionTypes.SEARCH_BLUR:  return state.set('focused',false);
       // case actionTypes.CHANGE_LIST:  return state.set('list',action.data).set('totalPage',action.totalPage); 等同于下面的merge语法
       case actionTypes.CHANGE_LIST:  return state.merge({
           list:action.data,
           totalPage:action.totalPage
       })
        case actionTypes.MOUSE_ENTER:  return state.set('mouseIn',true); 
        case actionTypes.MOUSE_LEAVE:  return state.set('mouseIn',false); 
        case actionTypes.CHANGE_LIST_PAGE: return state.set('page',action.page);

    }

    return state;
}
