'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import {handleCloseOrdersModal} from "@/redux/features/cartSlice";

export const Orders = () => {
    const {isOpen} = useSelector((state) => state.cart);
    const orderRef = useRef(null);
    const dispatch = useDispatch();

    const handleCloseOrders = (e) => {
        if (orderRef.current && !orderRef.current.contains(e.target)) {
            dispatch(handleCloseOrdersModal());
            document.body.style.overflow = "auto";
        }
    };

    if (!isOpen) return null
    return (
        <div onClick={handleCloseOrders} className={"flex justify-center items-center fixed inset-0 z-[10000] modal-card-animation"}>
            <div ref={orderRef} className={"header-orders-modal absolute left-0 w-[21vw] min-h-[100vh] px-4 bg-surface-light shadow-sp-modal max-h-[90vh] orders-modal-card-animation min-w-[17.8125rem]"}>
                <div className={"mt-[40vh] text-center"}>
                    <div className={"mb-[3.75rem]"}>
                        <Image src={"/icons/no-orders.svg"} width={97} height={870} alt={"icon"} className={"w-[6.0625rem] h-[5.4375rem] mx-auto"}/>
                    </div>
                    <p className={"font-iranSans text-sm text-inactive-dark"}>
                        تا به حال هیچ سفارشی ثبت نکرده{"\u200c"}اید!
                    </p>
                </div>
            </div>
        </div>
    )
}