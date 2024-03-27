import { createSlice } from "@reduxjs/toolkit";


export const headerAddressSlice = createSlice({
    name : "addressModal",
    initialState : {
        isOpen : false,
        address : {
            title : "پیشفرض",
            direction : "تهران، کشاورز - پارک لاله، ولی عصر، فلسطین، برادران فرزام قبل از مهدوی ۱"
        }
    },
    reducers : {
        openAddressModal : (state) => {
            state.isOpen = true;
        },

        closeAddressModal : (state) => {
            state.isOpen = false;
        },

        setNewAddressName : (state, action) => {
            return state.address.title = [...state, action.payload];
        },

        setNewAddress : (state, action) => {
            return state.address.direction = [...state, action.payload];
        }
    }
});

export const { openAddressModal, closeAddressModal, setNewAddress, setNewAddressName } = headerAddressSlice.actions;
export const addressReducer = headerAddressSlice.reducer;