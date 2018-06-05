let actions = {
    changeText: function(evt, objectType){
        return {
            type: 'CHANGE_TEXT',
            text: evt.target.value,
            fieldName: evt.target.name,
            objectType : objectType
        }
    },

    changeOption: function(option, dropdownName, objectType){
        return {
            type: 'CHANGE_OPTION',
            option: option,
            dropdownName: dropdownName,
            objectType: objectType
        }
    },

    saveAddress: function(address, addressType){
        return {
            type: 'SAVE_ADDRESS',
            address: address,
            addressType: addressType
        }
    },

    clearAddress: function(){
        return {
            type: 'CLEAR_ADDRESS',
        }
    },

    handleBoxChange: function(ifChecked){
        return {
            type: 'HANDLE_BOX_CHANGE',
            ifChecked: ifChecked,
        }
    },

    cancelDataEntry: function(){
        return {
            type: 'CANCEL_DATA_ENTRY',
        }
    }
}

export default actions