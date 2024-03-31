import {createSlice} from "@reduxjs/toolkit";

export const elementOnScreenSlice = createSlice({
    name : "elementOnScreen",
    initialState : {
        elementId : ""
    },
    reducers : {
        setElementId : (state, action) => {
            state.elementId = action.payload
        }
    }
});

export const { setElementId } = elementOnScreenSlice.actions;
export const elementOnScreenReducer = elementOnScreenSlice.reducer;