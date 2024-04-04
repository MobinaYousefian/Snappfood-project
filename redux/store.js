import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import storage from "@/redux/customStorage";
import {addressReducer} from "@/redux/features/headerAddressSlice";
import {searchReducer} from "@/redux/features/headerSearchSlice";
import {cartReducer} from "@/redux/features/cartSlice";
import {supportReducer} from "@/redux/features/supportSlice";
import {sortingReducer} from "@/redux/features/sortingSlice";
import {activeCouponReducer} from "@/redux/features/activeCouponSlice";
import {elementOnScreenReducer} from "@/redux/features/elementOnScreenSlice";
import {showPartyReducer} from "@/redux/features/showPartySlice";
import {deliveryModalReducer} from "@/redux/features/deliveryModalSlice";
import {resInfoModalReducer} from "@/redux/features/resInfoModalSlice";

const persistConfig = {
    key : "persist",
    storage : storage,
    whitelist : ["sortValue"]
};

const rootReducer = combineReducers({
    addressModal :persistReducer(persistConfig, addressReducer),
    searchModal :persistReducer(persistConfig, searchReducer),
    cart : persistReducer(persistConfig, cartReducer),
    supportModal : persistReducer(persistConfig, supportReducer),
    sorting : persistReducer(persistConfig, sortingReducer),
    activeCoupon : persistReducer(persistConfig, activeCouponReducer),
    elementOnScreen : persistReducer(persistConfig, elementOnScreenReducer),
    showParty : persistReducer(persistConfig, showPartyReducer),
    deliveryModal : persistReducer(persistConfig, deliveryModalReducer),
    resInfoModal : persistReducer(persistConfig, resInfoModalReducer)
});

export const store = configureStore({
    reducer : rootReducer,
    middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});