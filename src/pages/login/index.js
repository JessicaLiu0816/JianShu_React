import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import{LoginWrapper,LoginBox,Input,Button} from './style';
import {actionCreators} from './store';
import {Redirect} from 'react-router-dom';

class Login extends PureComponent{
    render(){
        const {status}=this.props;
        if(!status){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='Username' ref={(input)=>{this.account=input}}/>    
                        <Input placeholder='Password' ref={(input)=>{this.password=input}} type='password'/> 
                        <Button onClick={()=>this.props.login(this.account,this.password)}>LogIn</Button>
                    </LoginBox>
                </LoginWrapper>
           )
        }
        else{
            return <Redirect to='/'></Redirect>
        }
       
    }
   
}

const mapState=(state)=>({
    status:state.getIn(['login','login'])
})

const mapDispatch=(dispatch)=>({
  login(accountElem,passwordElem){
      dispatch(actionCreators.login(accountElem.value,passwordElem.value))
  }
})
export default connect(mapState,mapDispatch)(Login);