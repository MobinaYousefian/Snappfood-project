import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import storage from "@/redux/customStorage";
import {addressReducer} from "@/redux/features/headerAddressSlice";
import {searchReducer} from "@/redux/features/headerSearchSlice";

const persistConfig = {
    key : "address",
    storage : storage,
    whitelist : ["address"]
};

const rootReducer = combineReducers({
    addressModal :persistReducer(persistConfig, addressReducer),
    searchModal :persistReducer(persistConfig, searchReducer)
});

export const store = configureStore({
    reducer : rootReducer,
    middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});