import React,{PureComponent} from 'react';
import {ListItem,ListInfo,Istar} from '../style';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class List extends PureComponent{
    render(){
        const {list}=this.props;
        return(
            <div> 
                {
                    list.map((item,index)=>{
                        return(
                            <Link key={index} to={'/detail/' + item.get('id')}>
                                <ListItem key={index}>
                                    <ListInfo>
                                            <h3 className='title'>{item.get('title')}</h3>
                                            <p className='discption'>{item.get('disp')}</p>
                                            <span className='author'>{item.get('author')}</span>
                                            <span className='speed'>{item.get('readSpeed')} <Istar size='10'></Istar></span>
                                    </ListInfo>
                                    <img className='pic' src={item.get('imgUrl')} alt=''></img>
                                 </ListItem>
                            </Link>                          
                        )
                    })
                }                                
            </div>

        )
    }
}
const mapStateToProps=(state)=>({
    list: state.get('home').get('contentList'),
})

export default connect(mapStateToProps,null)(List);

