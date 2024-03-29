import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import storage from "@/redux/customStorage";
import {addressReducer} from "@/redux/features/headerAddressSlice";
import {searchReducer} from "@/redux/features/headerSearchSlice";
import {cartReducer} from "@/redux/features/cartSlice";
import {supportReducer} from "@/redux/features/supportSlice";
import {sortingReducer} from "@/redux/features/sortingSlice";

const persistConfig = {
    key : "persist",
    storage : storage,
    whitelist : [""]
};

const rootReducer = combineReducers({
    addressModal :persistReducer(persistConfig, addressReducer),
    searchModal :persistReducer(persistConfig, searchReducer),
    cart : persistReducer(persistConfig, cartReducer),
    supportModal : persistReducer(persistConfig, supportReducer),
    sorting : persistReducer(persistConfig, sortingReducer)
});

export const store = configureStore({
    reducer : rootReducer,
    middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});