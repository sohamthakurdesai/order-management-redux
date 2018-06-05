import actions from "../actions";
import initialState from '../initialState'

const inputReducer = (state, actions) => {
    switch (actions.type){
        case 'CHANGE_TEXT':

            if (typeof actions.objectType === "undefined"){
                return Object.assign(
                    {}, state, {
                            [actions.fieldName]: actions.text 
                    }
                )
            }

            return Object.assign(
                {}, state, {
                        [actions.objectType]: {
                            ...state[actions.objectType],
                            [actions.fieldName]: actions.text 
                        }
                }
            )
        case 'CHANGE_OPTION':

            if (typeof actions.objectType === "undefined"){
                return Object.assign(
                    {}, state, {
                        [actions.dropdownName]: actions.option 
                    }
                )
            }

            return Object.assign(
                {}, state, {
                    [actions.objectType]: {
                        ...state[actions.objectType],
                        [actions.dropdownName]: actions.option
                    }
                }
            )
        case 'CANCEL_DATA_ENTRY':
            return Object.assign(
                {}, initialState
            )
        
        case 'CLEAR_ADDRESS':
            return Object.assign(
                {}, state, {
                    ...state,
                    address: initialState.address
                }                
            )

        case 'HANDLE_BOX_CHANGE': 
            var billingAddressValue = ""
            if(actions.ifChecked){
                billingAddressValue = state.customerDetails.shippingAddress;           
            }
            return Object.assign(
                {}, state, {
                    customerDetails: {
                        ...state.customerDetails,
                        billingAddress: billingAddressValue,
                        isShippingBillingSame: actions.ifChecked
                    }
                }
            )

        case 'SAVE_ADDRESS':
            var addressType = "shippingAddress";

            if(actions.addressType == "Billing Address"){
                addressType = "billingAddress";
            }

            return Object.assign(
                {}, state, {
                    customerDetails: {
                        ...state.customerDetails,
                        [addressType]: actions.address 
                    }
                }
            )

        default:
            return state;
    }
}

export default inputReducer