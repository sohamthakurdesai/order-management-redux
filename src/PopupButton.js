import React, { Component } from "react";
import Popup from "reactjs-popup";
import 'bootstrap/dist/css/bootstrap.css';
import './modal.css';

class PopupButton extends React.Component {
  
  render(){

    const PopUpComponent = this.props.popUpComponent;

    return(
      <Popup trigger={<button className="button">{this.props.description}</button>} modal={true} closeOnDocumentClick={false}>
          {
            close => (
              <div className="cutomModal">
                <a className="close" onClick={close}>
                  &times;
                </a>
                <div className="header"><b><i>{this.props.description}</i></b></div>
                <div className="content">
                  <PopUpComponent handleChange = {this.props.popUpChangeHandler} handleSelectChange={this.props.handleSelectChange}/>
                </div>
                <div className="actions">
                  <button className=".btn-primary" 
                    onClick = {
                                () => {
                                        this.props.popUpFunction();
                                        close();
                                      }
                              }>
                  Save </button>
                  &nbsp;
                  <button className=".btn-primary" onClick={() => {close()}}> Cancel </button>
              </div>
              </div>
            )
          }
      </Popup>
    );
  }
}

export default PopupButton;