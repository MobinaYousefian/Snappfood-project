import { createSlice } from "@reduxjs/toolkit";


export const headerAddressSlice = createSlice({
    name : "addressModal",
    initialState : {
        isOpen : false,
        address : [
            {title : "", location : "تهران، کشاورز - پارک لاله، ولی عصر، فلسطین، برادران فرزام قبل از مهدوی ۱"},
            {title : "آدرس دوم", location : "لاهیجان، انقلاب، امام خمینی شرقی قبل از میدان بصیرت ۱"}
        ],
    },
    reducers : {
        openAddressModal : (state) => {
            state.isOpen = true;
        },

        closeAddressModal : (state) => {
            state.isOpen = false;
        },

        setNewAddressTitle : (state, action) => {

        },

        setNewAddress : (state, action) => {

        }
    }
});

export const { openAddressModal, closeAddressModal, setNewAddress, setNewAddressTitle } = headerAddressSlice.actions;
export const addressReducer = headerAddressSlice.reducer;