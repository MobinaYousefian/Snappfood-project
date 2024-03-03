import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import {addressReducer} from "@/redux/features/headerAddressSlice";
import storage from "@/redux/customStorage";

const persistConfig = {
    key : "address",
    storage : storage,
    whitelist : ["address"]
};

const rootReducer = combineReducers({
    addressModal :persistReducer(persistConfig, addressReducer)
});

export const store = configureStore({
    reducer : rootReducer,
    middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});