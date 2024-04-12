'use client'
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";
import {handleAddFood} from "@/redux/features/cartSlice";
import {useDispatch} from "react-redux";

export const AddExtraToCart = ({foodWithExtra, extrasSelected, handleCloseModal}) => {
    const dispatch = useDispatch();
    const {foodE, priceTagE} = foodWithExtra

    /* to calculate current price of the food */
    const foodBasePrice = foodE.price.filter(({tag}) => tag === priceTagE)[0];

    let foodPrice
    if (foodBasePrice.isDiscount) {
        foodPrice = foodBasePrice.value * ((100-foodBasePrice.discountNumber)/100);
    }else if (foodE.isParty) {
        foodPrice = foodBasePrice.value * ((100-foodE.partyDiscount)/100);
    }else {
        foodPrice = foodBasePrice.value
    }


    const extrasPrice = extrasSelected.reduce((prev, cur) => {
        return prev + cur.price
    }, 0)


    const handleAddToCart = (e) => {
        e.preventDefault();
        dispatch(handleAddFood({food : foodE, priceTag : priceTagE, counter : 1, extras : extrasSelected, extraPrice : extrasPrice}));
        handleCloseModal();
    }

    return (
        <div className={"p-3 flex"}>
            <button onClick={handleAddToCart} className={"h-12 flex items-center justify-center transition-socialFooter w-full rounded-md text-surface-light bg-accent-main bg-clip-padding min-w-[6.6875rem] border-[0.09375rem] border-accent-main"}>
                <p className={"font-iRANSansBold text-base pl-2 text-surface-main"}>افزودن به سبد خرید</p>
                <span className={"font-iranSans text-sm text-surface-main"}>
                    {toFarsiNumber(priceFormatting(foodPrice + extrasPrice))}
                    <span className={"text-xs text-surface-light"}> تومان</span>
                </span>
            </button>
        </div>
    )
}