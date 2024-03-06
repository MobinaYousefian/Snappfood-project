import {createSlice} from "@reduxjs/toolkit";

export const HeaderSearchSlice = createSlice({
    name: "searchModal",
    initialState : {
        isOpen : false,
    },
    reducers : {
        handleOpenModal : (state) => {
          state.isOpen = true;
      },

        handleCloseModal : (state) => {
            state.isOpen = false;
        }
    }
});

export const {handleOpenModal, handleCloseModal} = HeaderSearchSlice.actions;
export const searchReducer = HeaderSearchSlice.reducer;