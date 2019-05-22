import React,{PureComponent} from 'react';
import {RecommendList,RecommendItem,Iarrow} from '../style';
import {connect} from 'react-redux';

class Recommend extends PureComponent{
    render(){
        const {list} =this.props;
        return(
            <div style={{marginTop:'30px',marginBottom:'30px'}}>
                {
                    list.map(item=>{
                        return(
                            <RecommendList key={item.get('id')}>
                                <RecommendItem >                                   
                                {item.get('text')}
                                <Iarrow size='10'></Iarrow>   
                                </RecommendItem>
                            </RecommendList>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps=state=>({
    list:state.get('home').get('recommendList')
})
export default connect(mapStateToProps,null)(Recommend);