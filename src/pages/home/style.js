import styled from 'styled-components';
import {Star} from 'styled-icons/fa-solid/Star';
import{GreaterThan}from 'styled-icons/fa-solid/GreaterThan';

export const HomeWrapper=styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`
export const HomeLeft=styled.div`
    width:625px;
    float:left;
    padding-top:30px;
    margin-left:15px;
    .banner-img{
        width:625px;
        height:380px;
    }
`
export const HomeRight=styled.div`
    width:240px;
    float:right;

`
export const TopicWrapper=styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`
export const TopicItem=styled.div`
    float:left;
    background:#f7f7f7;
    margin-left:18px;
    height:32px;
    margin-bottom:18px;
    line-height:32px;
    border:1px solid #dcdcdc;
    border-radius:4px;
    padding-right:10px;
    color:#000;
    font-family:Arial, Helvetica, sans-serif;
    .smallImg{
        display:block;
        float:left;
        width:32px; height:32px;
        margin-right:10px;
    }

`
export const ListItem=styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .pic{
        width:125px;
        height:100px;
        display:block;
        float:right;
        border-radius:10px;
    }
`
export const ListInfo=styled.div`
    width:500px;
    float:left;
    font-family:Arial, Helvetica, sans-serif;
    .title{
        font-size:18px;
        line-height:27px;
        font-weight:bold;
        color:#333;
    }
    .discption{
        font-size:13px;
        color:#999;
        line-height:24px;
    }
    .author{
        font-size:13px;
    }
    .speed{
        font-size:13px;
        color:#999;
        margin-left:20px;
    }
    
`
export const Istar=styled(Star)``
export const Iarrow=styled(GreaterThan)`
 padding-left:5px; color:white;
`

export const  RecommendList=styled.div`
    width:250px;
    padding-top:10px;
    overflow:visible;
    background:#1d2026;
    padding-bottom:10px;
`
export const  RecommendItem=styled.div`
    height:40px;
    width:81.5%;
    padding-left:30px;
    color:white;
    font-family:Arial, Helvetica, sans-serif;
    font-size:16px;
    line-height:40px;
    &:hover{
        background:white;
        color:#ec6149;
        left:-10px;
        border-left:3px solid black;
    }

`
export const DownloadAppSection=styled.div`
    width:235px;
    margin-right:10px;
    overflow:hidden;
    border:1px solid #dcdcdc;
    border-radius:5px;

    .barcodeImg{
        width：90px;
        height:90px;
        display:block;
        float:left;
    }
    .discption{
        float:left;
        font-family:Arial, Helvetica, sans-serif;
        font-size:12px;
        color:#999;
        margin-bottom:0;
        margin-top:20;
        padding-top:10px;
    }
`;

export const WriterWrapper=styled.div`
    margin-top:100px;
    width:235px;
    height:auto;
    text-align:center;
    position:relative;
    color:#969696;
`;

export const WriterItem=styled.div`
    width:100%;
    height:60px;
    margin:3px 0;
    position:relative;
    img{
        display:inline-block;
        height:50px;
        width:50px;
        position:absolute;
        top:50%;
        left:0;
        margin-top:-25px;
        border-radius:30px;
    };
`
export const WriteDiscription=styled.div`
    display:flex;
    flex-direction:column;
    width:180px;
    height:60px;
    font-size:14px;
    color:black;
    top:0;
    right:0;
    position:absolute;
    top:50%;
    margin-top:-15px;
`

export const LoadMore=styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    text-align:center;
    background:#a5a5a5;
    border-radius:20px;
    color:#fff;
    margin:30px 0;
    cursor:pointer;

`
export const BackTop=styled.div`
    position:fixed;
    right:30px;
    bottom:30px;
    width:60px;
    height:60px;
    line-height:30px;
    text-align:center;
    border:1px solid #ccc;
`