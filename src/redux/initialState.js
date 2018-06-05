let initialState = {    
    customerDetails: {
        customerName: "",
        shippingAddress: "",
        isShippingBillingSame: false,
        billingAddress: "",
        emailAddress: "",
        contactNumber: "",
    },

    address: {
        countries: "",
        fullName: "",
        mobileNumber: "",
        pinCode: "",
        flatNo: "",
        floor: "",
        buildingName: "",
        locality: "",
        landmark: "",
        city: "",
        state: "",
        addressType: "Shipping Address",
    },

    loginDetails: {
        userName: "",
        password: "",
    },
    
    confirmPassword: "",
}

export default initialState;