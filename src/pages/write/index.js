import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Write extends PureComponent{
    render(){
        const {status}=this.props;
        if(status){
            return(
               <div>This is the page for wrting, under developement</div>
           )
        }
        else{
            return <Redirect to='/login'></Redirect>
        }
       
    }
   
}

const mapState=(state)=>({
    status:state.getIn(['login','login'])
})


export default connect(mapState,null)(Write);