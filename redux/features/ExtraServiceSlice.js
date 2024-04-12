import {createSlice} from "@reduxjs/toolkit";

export const extraServiceSlice = createSlice({
    name : "extraService",
    initialState : {
        isOpenExtraService : false,
        foodWithExtra : [],
        extrasSelected : [],
    },
    reducers : {
        handleOpenExtraService : (state) => {
            state.isOpenExtraService = true
        },

        handleCloseExtraService : (state) => {
            state.isOpenExtraService = false
        },

        setFoodWithExtra : (state, action) => {
            state.foodWithExtra = action.payload
        },

        setExtrasSelected : (state, action) => {
            state.extrasSelected = [...state.extrasSelected, action.payload]
        },

        deleteExtrasSelected : (state, action) => {
            state.extrasSelected = state.extrasSelected.filter((item) => item.id !== action.payload)
        }
    }
});

export const {handleCloseExtraService, handleOpenExtraService, setFoodWithExtra, setExtrasSelected, deleteExtrasSelected} = extraServiceSlice.actions
export const extraServiceReducer = extraServiceSlice.reducer;