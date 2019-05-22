import React,{Component}from 'react';
import {Outter,HeaderWrapper,
        Logo,Nav,NavItem,NavSearch,
        Addition,Btn,SearchWrapper,
        IDownload,IPenNib,ISearch,
        SearchInfo,SearchInfoTtitle,SearchInfoSwitch,
        SearchInfoItem,SearchInfoList,Iloop
    } from './style';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store';
import {Link} from 'react-router-dom';


class Header extends Component{

    getListArea=()=>{
        const{focused,mouseIn,list,page,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage}=this.props;
        const pageList=[];
        const newList=Array.from(list);
        if(newList.length){
            for(let i=((page-1)*10); i<page*10;i++){
                        pageList.push(
                            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>           
                        )
                    }
        }
        if(focused || mouseIn){
            return(
                <SearchInfo  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <SearchInfoTtitle>
                                    Trending Search
                                    <Iloop size='15' ref={icon=>this.spinIcon=icon}></Iloop>
                                    <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>Change Trending</SearchInfoSwitch>
                                    <SearchInfoList>{ pageList }</SearchInfoList>
                                </SearchInfoTtitle>
                 </SearchInfo>
            )
        }else{
            return null;
        }
    }
  
    render(){
        const{focused,handleInputFocus,handleInputBlur,login,logout}=this.props;
        return(
            <Outter>
            <HeaderWrapper>
                <Link to='/'>  <Logo /></Link>
                <Nav>
                    <Link to='/'> <NavItem className='left active'>Home</NavItem> </Link>
                    <NavItem className='left'><IDownload size='20'/>Download App</NavItem>
                    {
                        login? <NavItem  onClick={logout} className='right'>LogOut</NavItem>:<Link to='/login'><NavItem className='right'>LogIn</NavItem></Link> 
                    }
                    <NavItem className='right'>Aa</NavItem>
                    <SearchWrapper>
                        <CSSTransition timeout={200} in={focused} classNames='slide'>
                            <NavSearch className={focused?'focused':''}
                                        onFocus={handleInputFocus}
                                        onBlur={handleInputBlur}>
                            </NavSearch>
                        </CSSTransition>
                        <ISearch className={focused?'focused':''} />
                        {this.getListArea()}
                    </SearchWrapper>
                
                </Nav>
                <Addition>
                    <Link to='/write'><Btn className='writting'><IPenNib size='15'/>Start Write</Btn></Link>
                    <Btn className='reg'>Register </Btn>
                </Addition>
            </HeaderWrapper>
         </Outter> 
        )
    }
}



const mapStateToProps=(state)=>{
    return {
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        mouseIn:state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage']),
        login:state.getIn(['login','login'])
    }
}
const mapDispathToProps=(dispatch)=>{
    return {
        handleInputFocus(){
            dispatch(actionCreators.getList());
            const action=actionCreators.searchFocus();
            dispatch(action);
        },
        handleInputBlur(){
            const action=actionCreators.searchBlur();
            dispatch(action);
        },
        handleMouseEnter(){
            const action=actionCreators.mouseEnter();
            dispatch(action);
        },
        handleMouseLeave(){
            const action=actionCreators.mouseLeave();
            dispatch(action);
        },
        handleChangePage(page,totalPage,spin){
            let originAngle=spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle=parseInt(originAngle,10)
            }else{
                originAngle=0;
            }
            spin.style.transform=`rotate(${originAngle+360}deg)`;
            if(page<totalPage){
                dispatch(actionCreators.changePageList(page+1));
            }else{
                dispatch(actionCreators.changePageList(1));
            }
        },
        logout(){
            dispatch(loginActionCreators.logout());
        }
    }
}


export default connect (mapStateToProps,mapDispathToProps)(Header);