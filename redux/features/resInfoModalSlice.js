import {createSlice} from "@reduxjs/toolkit";

export const resInfoModalSlice = createSlice({
    name: "resInfoModal",
    initialState: {
        isOpenModal: false,
        isOpenVendorShift : false
    },
    reducers: {
        handleOpenResInfo: (state) => {
            state.isOpenModal = true
        },

        handleCloseResInfo : (state) => {
            state.isOpenModal = false
        },

        handleOpenVendorShift: (state) => {
            state.isOpenVendorShift = true
        },

        handleCloseVendorShift : (state) => {
            state.isOpenVendorShift = false
        }
    }
});


export const {handleCloseResInfo, handleOpenResInfo, handleCloseVendorShift, handleOpenVendorShift} = resInfoModalSlice.actions
export const resInfoModalReducer = resInfoModalSlice.reducer