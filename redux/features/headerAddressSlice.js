import { createSlice } from "@reduxjs/toolkit";

export const headerAddressSlice = createSlice({
    name : "addressModal",
    initialState : {
        isOpen : false,
        address : "تهران، کشاورز - پارک لاله، ولی عصر، فلسطین، برادران فرزام قبل از مهدوی"
    },
    reducers : {
        openAddressModal : (state, action) => {
            state.isOpen = true
        },

        closeAddressModal : (state, action) => {
            state.isOpen = false
        },

        setNewAddress : (state, payload) => {
            state.address = payload
        }
    }
})

export const { openAddressModal, closeAddressModal, setNewAddress } = headerAddressSlice.actions;
export default headerAddressSlice.reducer;