import React from 'react';
import ReactDOM, { render } from 'react-dom';
import CustomerDetails from './CustomerDetails';
import LoginDetails from './LoginDetails';
import axios from 'axios';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './redux/actions'

class CustomerCreation extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleBoxChange = this.handleBoxChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="myHeader"><i><u>Alfred Hitchcock Memorabilia</u></i></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4">
                        <fieldset>
                            <CustomerDetails objectType="customerDetails" handleChange={this.handleChange} handleBoxChange={this.handleBoxChange} 
                            handleSelectChange={this.handleSelectChange}/>

                            <fieldset>
                                <LoginDetails objectType="loginDetails" handleChange={this.handleChange}/>
                                <label>
                                Confirm Password*: 
                                <br/><input placeholder="Same as the password" value = {this.props.confirmPassword} className="login-details" type="password" name="CustomerName" align= "right" name="confirmPassword" onChange= {e => this.handleChange(e)}/>
                                </label>
                            </fieldset>

                            <button type = "button" onClick={this.handleSubmit}>Submit</button>&nbsp;&nbsp;
                            <button type = "button" onClick={this.handleButtonClick}>Cancel</button>
                            <br/><br/>
                        </fieldset>
                    </div>
                </div>
            </div>
        );
    }

    handleSubmit = event =>{

        event.preventDefault();

        const postData = {
            name: this.props.customerDetails.customerName,
            loginId: this.props.loginDetails.userName,
            password: this.props.confirmPassword,
            address: this.props.customerDetails.shippingAddress,
            shippingAddress: this.props.customerDetails.shippingAddress,
            billingAddress: this.props.customerDetails.billingAddress,
            email: this.props.customerDetails.emailAddress,
            contactNumber: this.props.customerDetails.contactNumber,
        }

        axios
            .post('http://192.168.100.29:8098/customer', postData)
            .then(
                response => {
                    if(response.data.customerId !=null && response.data.customerId>0){
                        
                        alert("Congratulations!!! you have successfully signed-up. \n" +
                        "Please go to login page and login using your login credentials");

                        this.props.actions.cancelDataEntry();
                    }
                },
                error => {
                    alert(error);
                }
            )

    }

    handleChange(evt, objectType){
        this.props.actions.changeText(evt, objectType);
    }

    handleSelectChange(evt, objectType){
        var option = evt.target.options[evt.target.selectedIndex].text;
        var dropdownName = evt.target.name;
        this.props.actions.changeOption(option, dropdownName, objectType);
    }

    handleBoxChange(evt){
        this.props.actions.handleBoxChange(evt.target.checked);
    }

    handleButtonClick(){
        this.props.actions.cancelDataEntry();
        alert("You have cancelled data entry. Please fill the form again if you want to continue.");
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomerCreation)