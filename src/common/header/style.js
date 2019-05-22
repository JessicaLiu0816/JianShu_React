import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
import{Download}from 'styled-icons/feather/Download';
import {PenNib}from 'styled-icons/fa-solid/PenNib';
import {Search}from 'styled-icons/fa-solid/Search';
import{Loop} from 'styled-icons/material/Loop';

export const Outter=styled.div`
    height：58px;
    border-bottom:1px solid #f0f0f0;
    position:relative;
`

export const HeaderWrapper=styled.div`
    height:58px;
    max-width:1440px;
    margin:0 auto;
    position:relative;
    z-index:1;
    
`;
export const Logo=styled.div`
    height:58px;
    width:58px;
    display:block;
    position:absolute;
    top:0;
    left:0;
    background-image:url(${logoPic});
    background-size:contain;
`;
export const Nav=styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
    padding-right:70px;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
`;

export const NavItem=styled.div`
    line-height:58px;
    padding:0 15px 0 15px;
    color:#333;
    font-size:17px;
    &.left{float:left}
    &.right{float:right;color:#969696}
    &.active{color:#ea6f5a}
`

export const NavSearch=styled.input.attrs({placeholder:'search'})`
    width:160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    margin-top:9px;
    background:#eee
    padding:0 35px 0 20px;
    box-sizing:border-box;
    font-size:14px;
    margin-left:20px;
    color:#777;
    &::placehodler{color:#999}
    &.focused{
        width:250px;
    }
    &.slide-enter{
        width:160px;
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:250px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active:{
        width:160px;
    }
`
export const SearchInfo=styled.div`
    position:absolute;
    width:240px;
    top:58px;
    padding:0 20px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    background:white;
`

export const Addition=styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
    font-family:Arial, Helvetica, sans-serif;
`

export const Btn=styled.div`
    float:right;
    line-height:38px;
    margin-top:9px;
    border-radius:20px;
    border:1px solid #ec6149;
    margin-right:20px;
    font-size:14px;
    padding:0 20px;
    &.reg{color:#ec6149};
    &.writting{color:#fff;background:#ec6149};
`
export const SearchInfoTtitle=styled.div`
    margin-top:20px;
    margin-bottom:15px;
    font-size:14px;
    color:#969696;
`
export const SearchInfoSwitch=styled.div`
    float:right;
    font-size:13px;
    cursor:pointer;
`
export const SearchWrapper=styled.div`
    float:left;   
    position:relative;
`
export const SearchInfoList=styled.div`
    overflow:hidden;
`
export const SearchInfoItem=styled.a`
    display:block;
    float:left;
    margin-right:10px;
    margin-top:5px;
    margin-bottom:5px;
    line-height:20px;
    padding:5px;
    font-size:12px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:3px;
`
export const IDownload = styled(Download)`
    color: gray;
    margin-Right:3px;
`
export const IPenNib = styled(PenNib)`
    margin-Right:3px;
`
export const ISearch = styled(Search)`
    color:gray;
    position:relative;
    padding:5px;
    left:-35px;
    top:10px;
    width:23px;
    height:23px;
    border-radius:15px;
    line-height:25px;
    text-align:center;
    &.focused{background:gray;color:white;}
`
export const Iloop =styled(Loop)`
    float:right;
    transition:all .2s ease-in;
    transform-origin:center center;
    display:block;
    cursor:pointer;

`
