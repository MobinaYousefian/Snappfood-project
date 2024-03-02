import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : false,
    address : "تهران، کشاورز - پارک لاله، ولی عصر، فلسطین، برادران فرزام قبل از مهدوی"
};

export const headerAddressSlice = createSlice({
    name : "addressModal",
    initialState,
    reducers : {
        openAddressModal : (state) => {
            state.isOpen = true;
        },

        closeAddressModal : (state) => {
            state.isOpen = false;
        },

        setNewAddress : (state, action) => {
            state.address = action.payload;
        }
    }
});

export const { openAddressModal, closeAddressModal, setNewAddress } = headerAddressSlice.actions;
export const addressReducer = headerAddressSlice.reducer;