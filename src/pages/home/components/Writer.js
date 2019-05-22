import React,{PureComponent} from 'react';
import{WriterWrapper,WriterItem,WriteDiscription} from '../style';

class Writer extends PureComponent{
    render(){
        return(
            <WriterWrapper>
               <div>Recommend Writer</div>
               <WriterItem>
                   <img src='https://previews.123rf.com/images/moremar/moremar1808/moremar180800004/111823264-portrait-of-a-woman-the-head-of-a-girl-avatar-minimalist-flat-vector-illustration.jpg'></img>
                   <WriteDiscription>
                        <div>Mingyue</div>
                        <div>wrote 189.1k words · 1.4k likes</div>
                   </WriteDiscription>
               </WriterItem>
               <WriterItem>
                   <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6wq2WVDgKFFRAhkdW4oQMI1AcknTzfXZ9O2ME6etKWjJR7c3rg'></img>
                   <WriteDiscription>
                        <div>阿岳</div>
                        <div>wrote 18.1k words · 3.1k likes</div>
                   </WriteDiscription>
               </WriterItem>
               <WriterItem>
                   <img src='https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP0151-CUSA09971_00-AV00000000000002/1536296874000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000'></img>
                   <WriteDiscription>
                        <div>Morty</div>
                        <div>wrote 189.1k words · 1.4k likes</div>
                   </WriteDiscription>
               </WriterItem>
               <WriterItem>
                   <img src='https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/99/UP0151-CUSA09971_00-AV00000000000003//image?_version=00_09_000&platform=chihiro&w=720&h=720&bg_color=000000&opacity=100'></img>
                   <WriteDiscription>
                        <div>Rick</div>
                        <div>wrote 189.1k words · 0.2k likes</div>
                   </WriteDiscription>
               </WriterItem>
               <WriterItem>
                   <img src='https://previews.123rf.com/images/jemastock/jemastock1706/jemastock170612079/80449024-man-avatar-profile-picture-people-vector-illustration.jpg'></img>
                   <WriteDiscription>
                        <div>BioBay</div>
                        <div>wrote 23.4k words · 7.1k likes</div>
                   </WriteDiscription>
               </WriterItem>
               <WriterItem>
                   <img src='https://cdn1.iconfinder.com/data/icons/different-types-of-faces-1/512/7_Avatar_girl_woman_face_user_sad-512.png'></img>
                   <WriteDiscription>
                        <div>春丽</div>
                        <div>wrote 88.8k words · 1k likes</div>
                   </WriteDiscription>
               </WriterItem>
               <WriterItem>
                   <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKA1mZCVFYDa9bWBvNoqn7gJ76Yp2TQsDqTxTtgEDd9EJivbaK'></img>
                   <WriteDiscription>
                        <div>Unkown me </div>
                        <div>wrote 234.2k words · 2.4k likes</div>
                   </WriteDiscription>
               </WriterItem>
            </WriterWrapper> 
        )
    }
}

export default Writer;