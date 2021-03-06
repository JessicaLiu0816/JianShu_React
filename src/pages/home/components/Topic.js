import React,{PureComponent} from 'react';
import {TopicWrapper,TopicItem} from'../style';
import{connect} from 'react-redux';

class Topic extends PureComponent{
    render(){
        const {list}=this.props;

        return(
            <TopicWrapper>
                {
                    list.map(item=>{
                        return (
                             <TopicItem key={item.get('id')}>
                                  <img src={item.get('imgUrl')} className='smallImg' alt=''></img>
                                  {item.get('title')}
                             </TopicItem>
                        )
                       
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps=(state)=>({
    list: state.get('home').get('topicList')   
})
export default connect(mapStateToProps,null)(Topic);