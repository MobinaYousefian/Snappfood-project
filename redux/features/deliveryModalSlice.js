import {createSlice} from "@reduxjs/toolkit";

export const deliveryModalSlice = createSlice({
    name : "deliveryModal",
    initialState : {
        isOpen : false
    },
    reducers : {
        openDeliveryModal : (state) => {
            state.isOpen = true
        },

        closeDeliveryModal : (state) => {
            state.isOpen = false
        }
    }
});

export const {openDeliveryModal, closeDeliveryModal} = deliveryModalSlice.actions
export const deliveryModalReducer = deliveryModalSlice.reducer