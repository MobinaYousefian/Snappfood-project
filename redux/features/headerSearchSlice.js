import {createSlice} from "@reduxjs/toolkit";

export const HeaderSearchSlice = createSlice({
    name: "searchModal",
    initialState : {
        isOpen : false,
        searchHistory : [],
        searchTerm : "",
        searchResults : [],
        resPageSearchResult : []
    },
    reducers : {
        handleOpenModal : (state) => {
            state.isOpen = true;
        },

        handleCloseModal : (state) => {
            state.isOpen = false;
        },

        setSearchTerm : (state, action) => {
            state.searchTerm = action.payload
        },

        clearSearchTerm : (state) => {
            state.searchTerm = ""
        },

        setSearchHistory : (state, action) => {
            state.searchHistory.push(action.payload)
            if (state.searchHistory.length > 4) {
                state.searchHistory.shift()
            }
        },

        deleteSearchHistory : (state,action) => {
            state.searchHistory.splice(action.payload, 1);
        },

        setResPageSearchResult : (state, action) => {
            state.resPageSearchResult = action.payload
        }
    }
});

export const {handleOpenModal, handleCloseModal, setSearchTerm, clearSearchTerm, setSearchHistory, deleteSearchHistory, setResPageSearchResult} = HeaderSearchSlice.actions;
export const searchReducer = HeaderSearchSlice.reducer;