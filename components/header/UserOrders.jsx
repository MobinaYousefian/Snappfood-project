'use client'
import Image from "next/image";
import {useDispatch} from "react-redux";
import {handleOpenOrdersModal} from "@/redux/features/cartSlice";

export const UserOrders = ({user}) => {
    const dispatch = useDispatch();

    const handleOpenOrders = () => {
        dispatch(handleOpenOrdersModal());
        document.body.style.overflow = "hidden";
    };

    return (
        <div onClick={handleOpenOrders} className={"sp-laptop:ml-[0.5625rem] mr-4 relative cursor-pointer flex"}>
            <Image src={"/icons/cart.svg"} width={20} height={20} alt={"icon"} className={"ml-2"}/>
            <p className={"text-carbon-main text-sm font-iRANSansBold ml-2 max-[959px]:hidden"}>سفارش{"\u200c"}ها</p>
        </div>
    )
}