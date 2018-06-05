import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Address from './Address';
import './index.css';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './redux/actions'

import { Modal, Button, ButtonToolbar } from 'react-bootstrap'

class CustomerDetails extends React.Component {

    constructor(props) {
        
        super(props);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.saveFromPopup = this.saveFromPopup.bind(this);
    
        this.state = {
          show: false
        };
    }

    handleClose() {
        this.props.actions.clearAddress();
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }
    

    saveFromPopup (){
        const fullAddress = this.props.address.fullName + ", \n" + 
                            "Flat No.- " + this.props.address.flatNo + ", Floor- " + this.props.address.floor + ", \n" +
                            this.props.address.buildingName + ", " + this.props.address.locality + ", \n" +
                            "Landmark : " + this.props.address.landmark + ", \n" +
                            "Pincode : " + this.props.address.pinCode  + ", \n" +
                            this.props.address.city + ", " + this.props.address.state + ", " + this.props.address.countries + "."

        this.props.actions.saveAddress(fullAddress, this.props.address.addressType);
        this.handleClose();
    }

    render(){
        return(
            <div>
                <h3 className="myHeader">Customer Sign-up</h3>
                <fieldset>
                        <label>Customer Name*:</label>
                        <br/><input value = {this.props.customerDetails.customerName} className="customer-details" placeholder="Customer's full Name" type="text" id="customerName" name="customerName" align= "right" onChange={e=> this.props.handleChange(e, this.props.objectType)}/>
                        <br/><br/>

                        <div className="modal-container" style={{ height: 30}}>
                            <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>Add address</Button>
                            <Modal 
                                show={this.state.show}
                                onHide={this.handleClose}
                                aria-labelledby="contained-modal-title"
                                animation={false}
                                >
                            <Modal.Header>
                                <Modal.Title id="contained-modal-title">
                                    Add address
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Address handleChange={this.props.handleChange} handleSelectChange={this.props.handleSelectChange}/>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.saveFromPopup}>Save</Button>
                                <Button onClick={this.handleClose}>Close</Button>
                            </Modal.Footer>
                            </Modal>
                        </div>
                        <br/>
                        <label>Shipping Address*:</label>
                        <br/><textarea resize="none" readOnly="readonly" className="customer-address" placeholder="Click on Add address" value = {this.props.customerDetails.shippingAddress} type="text" id="shippingAddress" name="shippingAddress" 
                        onChange={e=> this.props.handleChange(e, this.props.objectType)}/>
                        <br/>
                        <input checked={this.props.customerDetails.isShippingBillingSame} type="checkbox" id="isShippingBillingSame" name="isShippingBillingSame" onChange={e=> this.props.handleBoxChange(e)}/>&nbsp;<label>Billing address same as Shipping Address</label>
                        <br/>
                        <label>Billing Address*:</label>
                        <br/><textarea readOnly="readonly" className="customer-address" value = {this.props.customerDetails.billingAddress} placeholder="Click on Add address" type="text" id="billingAddress" name="billingAddress" onChange={e=> this.props.handleChange(e, this.props.objectType)}/>
                        <br/>
                        <label>Email Address*:</label>
                        <br/><input value = {this.props.customerDetails.emailAddress} className="customer-details" placeholder="username@example.com" type="email" id="emailAddress" name="emailAddress" align= "right" onChange={e=> this.props.handleChange(e, this.props.objectType)}/>
                        <br/>
                        <label>Contact Number*: </label>
                        <br/><input value = {this.props.customerDetails.contactNumber} className="customer-details" type="number" id="contactNumber" name="contactNumber" align= "right" onChange={e=> this.props.handleChange(e, this.props.objectType)}/>
                </fieldset>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetails)