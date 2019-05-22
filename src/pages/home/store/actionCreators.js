import axios from 'axios';
import * as constants from './constants';

const changeHomeData=(result)=>(
    {
        type:constants.CHANGE_HOME_DATA,
        topicList:result.topicList,
        contentList:result.contentList,
        recommendList:result.recommendList,
    }
)
export const getHomeInfo=()=>{
    return(dispatch)=>{
        axios.get('api/home.json').then((res)=>{
            const result=res.data.lists;
            const action=changeHomeData(result);
            dispatch(action); 
        })
    }
}


export const toggleTopShow=(show)=>({
    type:constants.TOGGLE_SCROLL_SHOW,
    show
})
