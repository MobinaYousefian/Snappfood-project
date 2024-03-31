import {createSlice} from "@reduxjs/toolkit";

export const showPartySlice = createSlice({
    name : "showParty",
    initialState : {
        isShown : true,
    },
    reducers : {
        handleNotShow : (state) => {
            state.isShown = false
        },

        handleShow : (state) => {
            state.isShown = true
        },
    }
});

export const {handleShow, handleNotShow} = showPartySlice.actions;
export const showPartyReducer = showPartySlice.reducer;