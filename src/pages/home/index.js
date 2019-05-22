import React,{PureComponent} from 'react';
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style';
import Topic from'./components/Topic';
import List from'./components/List';
import Recommed from'./components/Recommend';
import Writer from'./components/Writer';
import DownloadApp from './components/DownloadApp';
import {connect} from 'react-redux';
import {actionCreators} from './store';

class Home extends PureComponent{

    handleScrollTop(){window.scrollTo(0,0);}

    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img src='https://c.slashgear.com/wp-content/uploads/2018/04/142027593-980x620.jpg' alt='' className='banner-img'></img>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommed />
                    <DownloadApp />
                    <Writer />
                </HomeRight>
                {this.props.showScroll?<BackTop onClick={this.handleScrollTop}>Back Top</BackTop>:null}
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }

    bindEvents(){ window.addEventListener('scroll',this.props.changeScrollTopShow)}

}


const mapState=(state)=>({
    showScroll:state.get('home').get('showScroll')
})
const mapDispatch=(dispatch)=>({

    changeHomeData(){
        const action=actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>100){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
});

 export default connect (mapState,mapDispatch)(Home);
