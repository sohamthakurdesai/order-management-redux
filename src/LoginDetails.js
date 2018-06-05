import React from 'react';
import ReactDOM, { render } from 'react-dom';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './redux/actions'

class LoginDetails extends React.Component {

    render(){
        return(
             <form align="centre">
                <label>User Name*:</label>
                <br/><input value={this.props.loginDetails.userName} placeholder="Username" className="login-details" type="text" name="userName" align= "right" onChange = {e => this.props.handleChange(e, this.props.objectType)}/>
                <br/>
                <label>Password*:</label>
                <br/><input value={this.props.loginDetails.password} placeholder="New password" className="login-details" type="password" name="password" align= "right" onChange = {e => this.props.handleChange(e, this.props.objectType)}/>
             </form>
        );
    }
}

function mapStateToProps(state){
    return state;
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginDetails)