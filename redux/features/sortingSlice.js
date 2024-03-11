import {createSlice} from "@reduxjs/toolkit";

export const sortingSlice = createSlice ({
    name : "sorting",
    initialState : {
        isOpen : false,
        sortValue : "به ترتیب پیش‌فرض"
    },
    reducers : {
        handleOpenCloseSorting : (state) => {
            state.isOpen = !state.isOpen
        },

        handleCloseSorting : (state) => {
          state.isOpen = false
        },

        setSortValue : (state, action) => {
            state.sortValue = action.payload
        }
    }
});

export const {handleOpenCloseSorting, setSortValue, handleCloseSorting} = sortingSlice.actions;
export const sortingReducer = sortingSlice.reducer;