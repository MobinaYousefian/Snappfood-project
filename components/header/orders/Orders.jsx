'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import {handleCloseOrdersModal, handleOpenBill, setBillId} from "@/redux/features/cartSlice";

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

    const handleOpenBillModal = (e, id) => {
        e.preventDefault()
        e.stopPropagation();
        console.log(id)
        dispatch(setBillId(id))
        dispatch(handleOpenBill());
    }

    if (!isOpen) return null
    return (
        <>
            <div onClick={handleCloseOrders} className={"flex justify-center items-center fixed inset-0 z-[10000] modal-card-animation"}>
                <div ref={orderRef} className={"header-orders-modal absolute left-0 w-[21vw] min-h-[100vh] px-4 bg-surface-light shadow-sp-modal max-h-[90vh] orders-modal-card-animation min-w-[17.8125rem]"}>
                    <div className={"mt-4 flex flex-col pt-3"}>
                        <p className={"font-iRANSansBold text-xs text-carbon-light"}>سفارش‌های پیشین</p>
                        <div className={"mt-3 rounded-t-xl border-t-[0.0625rem] border-r-[0.0625rem] border-l-[0.0625rem] border-[rgba(58,61,66,0.12)]"}>
                            {
                                user.pastOrders.map((order, i) => (
                                    <div className={"pt-3 pb-2 flex justify-center border-b-[0.0625rem] border-b-[rgba(58,61,66,0.06)]"} key={i}>
                                        <div className={"flex flex-col w-[calc(100%-2rem)]"}>
                                            <div className={"flex items-center cursor-pointer"}>
                                                <div className={"w-12 h-12 flex flex-col"}>
                                                    <Image src={order.resAvatar} width={48} height={48} alt={order.resName} className={"rounded"}/>
                                                </div>
                                                <div className={"mr-4 flex flex-col"}>
                                                    <p className={"font-iRANSansBold text-sm text-carbon-main"}>{order.resName}</p>
                                                    <div className={"flex"}>
                                                        <p className={"font-iranSans text-xs text-carbon-main"}>{order.orderDate}</p>
                                                        <p className={"font-iranSans text-xs text-carbon-main mr-4"}>{order.orderTime}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                i === 0 &&
                                                <div className={"h-8 mt-4 px-2 bg-accent2-alphaMedium rounded flex justify-between items-center"}>
                                                    <p className={"leading-3 font-iranSans text-carbon-main text-[0.625rem]"}>نظرتان را درباره این سفارش به اشتراک بگذارید.</p>
                                                    <p className={"font-iRANSansBold text-xs cursor-pointer text-accent2-main ml-1"}>ثبت نظر</p>
                                                </div>
                                            }
                                            <div className={"mt-3 mb-2 flex justify-center"}>
                                                <button onClick={(e) => handleOpenBillModal(e, order.id)} className={"py-[1px] px-[6px] flex-1 h-8 ml-4 flex justify-center items-center transition-socialFooter rounded-md bg-carbon-alphaLight bg-clip-padding min-w-[6.6875rem] border-[0.09375rem]  border-[rgba(58,61,66,0.06)]"}>
                                                    <Image src={"/icons/order-bill.svg"} width={17} height={18} alt={order.resName} className={"rotate-180 flex-[0_0_auto]"}/>
                                                    <p className={"mr-2 font-iRANSansBold text-sm text-carbon-main"}>مشاهده فاکتور</p>
                                                </button>
                                                <button className={"py-[1px] px-[6px] flex-1 h-8 flex justify-center items-center transition-socialFooter rounded-md bg-carbon-alphaLight bg-clip-padding min-w-[6.6875rem] border-[0.09375rem]  border-[rgba(58,61,66,0.06)]"}>
                                                    <Image src={"/icons/reorder.svg"} width={16} height={16} alt={order.resName} className={"rotate-180 flex-[0_0_auto]"}/>
                                                    <p className={"mr-2 font-iRANSansBold text-sm text-carbon-main"}>سفارش مجدد</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/*<OrdersBillModal pastOrders={user.pastOrders}/>*/}
        </>
    )
}