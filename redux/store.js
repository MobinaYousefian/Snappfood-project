import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from  'redux-persist/lib/storage'
import {headerAddressSlice} from "@/redux/features/headerAddressSlice";

const persistConfig = {
    key: "root",
    storage
};

const reducer = combineReducers({
    headerAddress : headerAddressSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

let store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
