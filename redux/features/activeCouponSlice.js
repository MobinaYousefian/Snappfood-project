import {createSlice} from "@reduxjs/toolkit";

export const activeCouponSlice = createSlice({
    name : "activeCoupon",
    initialState : {
        activeList : [
            "۲۰٪ تخفیف/مخصوص سفارش اول",
            // "۱۰٪ تخفیف/با خرید از دسته\u200Cی پیتزا"
        ],
    },
    reducers : {
        addActiveCoupon : (state, action) => {
            state.activeList = [...state.activeList, action.payload]
        }
    }
});

export const { addActiveCoupon } = activeCouponSlice.actions;
export const activeCouponReducer = activeCouponSlice.reducer;