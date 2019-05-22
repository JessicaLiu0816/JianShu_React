import axios from 'axios';
import * as constants from './constants';


const changeDetail=(id,title,content)=>({
    type:constants.CHANGE_DETAIL,
    title,
    content,
    id
})

export const getDetail=(id)=>{
    return (dispatch)=>{
        axios.get('/api/detail.json?id='+id).then((res)=>{
            const  result=res.data.data;
            dispatch(changeDetail(result.id,result.title,result.content));
        })
    }
} 