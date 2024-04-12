import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : "cart",
    initialState : {
        /* header cart */
        isOpen : false,
        notifications : 1,
        isOpenBill : false,
        billId : '',
        /* buying basket cart */
        basket : [],
        warningIsOpen : false,
    },
    reducers : {
        handleDeleteNotifications : (state) => {
          state.notifications = 0
        },

        handleOpenBill : (state) => {
            state.isOpenBill = true
        },

        handleCloseBill : (state) => {
            state.isOpenBill = false
        },

        setBillId : (state, action) => {
            state.billId = action.payload
        },

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

export const {setBillId ,handleOpenOrdersModal, handleCloseOrdersModal, handleAddFood, handleDeleteFood, handleEmptyCart, handleCloseWarning, handleOpenWarning, handleDeleteNotifications, handleCloseBill, handleOpenBill} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;