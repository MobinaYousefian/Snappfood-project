'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {handleDeleteNotifications, handleOpenOrdersModal} from "@/redux/features/cartSlice";
import {toFarsiNumber} from "@/utils/numberConverter";

export const UserOrders = () => {
    const {notifications} = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const handleOpenOrders = () => {
        dispatch(handleOpenOrdersModal());
        dispatch(handleDeleteNotifications());
        document.body.style.overflow = "hidden";
    };

    return (
        <div onClick={handleOpenOrders} className={"sp-laptop:ml-[0.5625rem] mr-4 relative cursor-pointer flex"}>
            {
                notifications > 0 &&
                <div className={"font-iRANSansBold bg-accent-main rounded-full text-xs select-none text-surface-light w-4 h-4 justify-center items-center flex absolute top-[-0.3125rem] right-[-0.3125rem]"}>{toFarsiNumber(1)}</div>
            }
            <Image src={"/icons/cart.svg"} width={20} height={20} alt={"icon"} className={"ml-2"}/>
            <p className={"text-carbon-main text-sm font-iRANSansBold ml-2 max-[959px]:hidden"}>سفارش{"\u200c"}ها</p>
        </div>
    )
}