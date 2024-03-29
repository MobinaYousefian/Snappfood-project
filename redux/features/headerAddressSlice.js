import { createSlice } from "@reduxjs/toolkit";


export const headerAddressSlice = createSlice({
    name : "addressModal",
    initialState : {
        isOpen : false,
        address : [
            {title : "بغتلاتلاfgfgh", location : "تهران، کشاورز - پارک لاله، ولی عصر، فلسطین، برادران فرزام قبل از مهدوی ۱"},
            {title : "آدرس دوم", location : "لاهیجان، انقلاب، امام خمینی شرقی قبل از میدان بصیرت ۱"}
        ],
        selected : {title : "بغتلاتلاfgfgh", location : "تهران، کشاورز - پارک لاله، ولی عصر، فلسطین، برادران فرزام قبل از مهدوی ۱"}
    },
    reducers : {
        openAddressModal : (state) => {
            state.isOpen = true;
        },

        closeAddressModal : (state) => {
            state.isOpen = false;
        },

        selectAddress : (state, action) => {
            state.selected = action.payload
        },

        setNewAddressTitle : (state, action) => {

        },

        setNewAddress : (state, action) => {

        }
    }
});

export const { openAddressModal, closeAddressModal, setNewAddress, setNewAddressTitle, selectAddress } = headerAddressSlice.actions;
export const addressReducer = headerAddressSlice.reducer;