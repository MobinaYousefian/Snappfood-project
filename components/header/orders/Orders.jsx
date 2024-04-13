'use client'
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import {handleCloseOrdersModal} from "@/redux/features/cartSlice";
import {OrderItem} from "@/components";

export const Orders = ({user}) => {
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
                <div className={"mt-4 flex flex-col pt-3"}>
                    <p className={"font-iRANSansBold text-xs text-carbon-light"}>سفارش‌های پیشین</p>
                    <div className={"mt-3 rounded-t-xl border-t-[0.0625rem] border-r-[0.0625rem] border-l-[0.0625rem] border-[rgba(58,61,66,0.12)]"}>
                        {
                            user.pastOrders.map((order, i) => (
                                <OrderItem
                                    key={i}
                                    order={order}
                                    index={i}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}