import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : "cart",
    initialState : {
        isOpen : false,
        basket : [],
        warningIsOpen : false,
    },
    reducers : {
        handleOpenOrdersModal : (state) => {
            state.isOpen = true
        },

        handleCloseOrdersModal : (state) => {
            state.isOpen = false
        },

        handleAddFood : (state, action) => {
            const hasItem = state.basket.find((item) => item.priceTag === action.payload.priceTag)
            if (!hasItem) {
                state.basket = [...state.basket, action.payload]
            }else {
                hasItem.counter++
            }
        },

        handleDeleteFood : (state, action) => {
            const hasItemIndex = state.basket.findIndex((item) => item.priceTag === action.payload)
            state.basket[hasItemIndex].counter--
            if (state.basket[hasItemIndex].counter === 0)
            state.basket = state.basket.filter((item) => item.priceTag !== action.payload)
        },

        handleEmptyCart : (state) => {
            state.basket = []
        },

        handleOpenWarning : (state) => {
            state.warningIsOpen = true
        },

        handleCloseWarning : (state) => {
            state.warningIsOpen = false
        }
    }
});

export const {handleOpenOrdersModal, handleCloseOrdersModal, handleAddFood, handleDeleteFood, handleEmptyCart, handleCloseWarning, handleOpenWarning} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;