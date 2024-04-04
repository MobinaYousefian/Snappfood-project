import {createSlice} from "@reduxjs/toolkit";

export const foodDataSlice = createSlice ({
    name : "imageSlider",
    initialState : {
        isOpenFoodModal : false,
        foodData : [],
        imageUrl : ""
    },
    reducers : {
        handleOpenFoodModal : (state) => {
            state.isOpenFoodModal = true
        },

        handleCloseFoodModal : (state) => {
            state.isOpenFoodModal = false
        },

        setFoodData : (state, action) => {
            state.foodData = action.payload
        },

        setImageUrl : (state, action) => {
            state.imageUrl = action.payload
        }
    }
});

export const {setImageUrl, setFoodData, handleCloseFoodModal, handleOpenFoodModal} = foodDataSlice.actions;
export const foodDataReducer = foodDataSlice.reducer