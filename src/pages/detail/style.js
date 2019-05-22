import styled from 'styled-components';
import {Like} from 'styled-icons/boxicons-regular/Like';
import {BookmarkStar} from 'styled-icons/boxicons-regular/BookmarkStar';
import {Twitter} from 'styled-icons/boxicons-logos/Twitter';
import {FacebookSquare} from 'styled-icons/boxicons-logos/FacebookSquare';

export const DetailWrapper=styled.div`
    width:620px;
    margin:0 auto;
    padding-bottom:100px;
    overflow:hidden;
`
export const DetailHeader=styled.div`
    margin:50px 0 20px 0;
    font-size:34px;
    line-height:44px;
    color:#333;
    font-weight:bold;
    text-align:center;
`
export const DetailContent=styled.div`
    color:#2f2f2f;
    img{
        width:100%;
    }
    p{
        margin:25px 0;
        font-size:16px;
        line-height:30px;
        text-align:justify;
    }

`

export const Sideinfo=styled.div`
    width:140px;
    height:auto;
    position:fixed;
    top:90px;
    font-family:medium-content-sans-serif-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    font-size:14px;
    right:450px;
    img{
        width:140px;
        height:200px;
    }

`
export const Tag=styled.div`
 display:flex;
 justify-content:space-between;
 padding-top:15px;
`
export const Ad=styled.div`
    border-bottom:1px solid rgba(0,0,0,.15) 
`
export const ILike = styled(Like)``
export const IBookmarkStar = styled(BookmarkStar)``
export const ITwitter = styled(Twitter)``
export const IFacebookSquare = styled(FacebookSquare)``