import React,{Component} from 'react';
import {DetailWrapper,DetailHeader,DetailContent,Sideinfo,ILike,IBookmarkStar,ITwitter,IFacebookSquare,Ad,Tag} from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store';

class Detail extends Component{
    render(){
        const {title,content}=this.props;

        return(
            <div>
                <DetailWrapper>
                    <DetailHeader>{title}</DetailHeader>
                    <DetailContent dangerouslySetInnerHTML={{__html:content}} />
                </DetailWrapper>
                <Sideinfo>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Advert_for_Guy%27s_Tonic_Wellcome_L0040436.jpg/220px-Advert_for_Guy%27s_Tonic_Wellcome_L0040436.jpg'></img>
                    <Ad>
                        <p className='p-up'>The Five Separations of Body Image</p>
                        <p style={{color:'rgba(0,0,0,.54)'}}>Ricky Derisz</p>
                    </Ad>
                    <Ad>
                        <p className='p-up'>What Can Lizards Teach Us About Happiness?</p>
                        <p style={{color:'rgba(0,0,0,.54)'}}>Taylor Mitchell Brown</p>
                    </Ad>
                    <Ad>
                        <p className='p-up'>When Mindfulness</p>
                        <p style={{color:'rgba(0,0,0,.54)'}}>keith Kearney</p>
                    </Ad>
                    <Tag>
                        <ILike size='20'></ILike>
                        <IBookmarkStar size='20'></IBookmarkStar>
                        <ITwitter size='20'></ITwitter>
                        <IFacebookSquare size='20'></IFacebookSquare>
                    </Tag>
                </Sideinfo>
            </div>
          
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}
const mapState=(state)=>({
    id:state.getIn(['detail','id']),
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content']),
})
const mapDispatch=(dispatch)=>({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
})
export default connect(mapState,mapDispatch)(Detail);