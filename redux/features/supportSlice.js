import {createSlice} from "@reduxjs/toolkit";

export const SupportSlice = createSlice({
    name: "supportButton",
    initialState: {
        isOpen : false,
    },
    reducers : {
        handleOpenSupport : (state) => {
            state.isOpen = true
        },

        handleCloseSupport : (state) => {
            state.isOpen = false
        },
    }
});

export const {handleOpenSupport, handleCloseSupport} = SupportSlice.actions;
export const supportReducer = SupportSlice.reducer;