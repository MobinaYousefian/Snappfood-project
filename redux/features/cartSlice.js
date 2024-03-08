import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : "cart",
    initialState : {
        isOpen : false,
    },
    reducers : {
        handleOpenCartModal : (state) => {
            state.isOpen = true
        },

        handleCloseCartModal : (state) => {
            state.isOpen = false
        }
    }
});

export const {handleOpenCartModal, handleCloseCartModal} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;