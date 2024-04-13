'use client'
import {useDispatch, useSelector} from "react-redux";
import {handleCloseWarning, handleEmptyCart} from "@/redux/features/cartSlice";

export const DeleteCartModal = () => {
    const dispatch = useDispatch();
    const {warningIsOpen} = useSelector(state => state.cart);

    const closeWarning = () => {
        dispatch(handleCloseWarning());
        document.body.style.overflow = "auto";
    }

    const emptyCart = () => {
        dispatch(handleEmptyCart());
        closeWarning()
    }

    if (!warningIsOpen) return null;
    return (
        <div className={"inset-0 modal-card-animation flex justify-center items-center fixed z-[1000]"}>
            <div className={"address-modal-card-animation overflow-hidden bg-surface-light shadow-sp-modal rounded-xl max-h-[90vh]"}>
                <div className={"flex-col justify-between flex w-[95vw] max-w-[30rem]"}>
                    <p className={"p-4 font-iRANSansBold text-lg text-carbon-main"}>آیا از حذف سبد خرید مطمئن هستید؟</p>
                    <div className={"p-4 flex justify-around"}>
                        <button onClick={closeWarning} className={"bg-clip-padding border-carbon-alphaLight inline-flex justify-center items-center transition-socialFooter h-12 rounded-md text-carbon-main bg-carbon-alphaLight font-iRANSansBold text-[1.125rem] max-w-[13.5rem] w-[45%] border-[0.09375rem]"}>انصراف</button>
                        <button onClick={emptyCart} className={"bg-clip-padding border-accent-main inline-flex justify-center items-center transition-socialFooter h-12 rounded-md text-surface-light bg-accent-main font-iRANSansBold text-[1.125rem] max-w-[13.5rem] w-[45%] border-[0.09375rem]"}>حذف سبد</button>
                    </div>
                </div>
            </div>
        </div>
    )
}