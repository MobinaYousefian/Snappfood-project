import { createSlice } from "@reduxjs/toolkit";


export const headerAddressSlice = createSlice({
    name : "addressModal",
    initialState : {
        isOpen : false,
        address : "تهران، کشاورز - پارک لاله، ولی عصر، فلسطین، برادران فرزام قبل از مهدوی"
    },
    reducers : {
        openAddressModal : (state) => {
            state.isOpen = true;
        },

        closeAddressModal : (state) => {
            state.isOpen = false;
        },

        setNewAddress : (state, action) => {
            return state.address = [...state, action.payload];
        }
    }
});

export const { openAddressModal, closeAddressModal, setNewAddress } = headerAddressSlice.actions;
export const addressReducer = headerAddressSlice.reducer;