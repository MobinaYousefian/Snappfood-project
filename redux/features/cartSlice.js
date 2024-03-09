import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : "cart",
    initialState : {
        isOpen : false,
    },
    reducers : {
        handleOpenOrdersModal : (state) => {
            state.isOpen = true
        },

        handleCloseOrdersModal : (state) => {
            state.isOpen = false
        }
    }
});

export const {handleOpenOrdersModal, handleCloseOrdersModal} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;