
import {fromJS} from 'immutable';
import * as constants from './constants';


const defaultState=fromJS({
    topicList:[],
    contentList:[],
    recommendList:[],
    showScroll:true
})
export default (state=defaultState,action)=>{

    switch(action.type){
        case constants.CHANGE_HOME_DATA: 
        return state.merge({
            topicList:fromJS(action.topicList),
            contentList:fromJS(action.contentList),
            recommendList:fromJS(action.recommendList)
        })
        
        case constants.TOGGLE_SCROLL_SHOW: 
        return state.set('showScroll',action.show);
   

        default:
        return state;
    }
}
