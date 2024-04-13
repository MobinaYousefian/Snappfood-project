'use client'
import Image from "next/image";
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";
import {useDispatch, useSelector} from "react-redux";
import clsx from "clsx";
import {handleCloseBill} from "@/redux/features/cartSlice";

export const OrdersBillModal = ({pastOrders}) => {
    const {isOpenBill, billId} = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const order = pastOrders.filter(({id}) => id === billId)[0];

    const handleCloseOrderBill = () => {
        dispatch(handleCloseBill())
    }


    if (!isOpenBill) return null;
    return (
        <div className={"flex justify-center items-center fixed inset-0 z-[10000] modal-card-animation"}>
            <div className={"static rounded-xl overflow-y-auto w-[95vw] max-w-[25rem] bg-surface-light shadow-sp-modal max-h-[90vh] address-modal-card-animation"}>
                <div className={"items-center h-[56px] w-full relative flex justify-between pl-[56px]"}>
                    <button onClick={handleCloseOrderBill} className={"items-center justify-center flex py-[1px] px-[6px] w-[56px] h-[56px]"}>
                        <Image src={"/icons/close.svg"} width={14} height={14} alt={"icons"} className={"w-3.5 h-3.5"}/>
                    </button>
                    <p className={"font-iRANSansBold text-sm text-carbon-main"}> </p>
                </div>
                <div className={"rounded-md flex flex-col"}>
                    <span className={"my-1 mx-4 font-iRANSansBold text-2xl text-carbon-main"}>فاکتور سفارش</span>
                    <p className={"font-iranSans text-sm text-carbon-light mb-4 mx-[1.125rem]"}>{order.resName}</p>
                    {
                        order.foods.map((item, i) => (
                            <div key={i} className={"items-center justify-between flex border-b-carbon-alphaLight h-12 px-4 border-b-[0.0625rem]"}>
                                <span className={"font-iranSans text-sm text-carbon-main"}>{item.name}</span>
                                <div className={"flex items-center flex-row-reverse font-iranSans text-sm text-carbon-light"}>
                                    <div className={"text-carbon-main font-iRANSansBold flex items-center pb-0.5"}>
                                        {toFarsiNumber(priceFormatting(item.price))}
                                        <span className={"text-carbon-light font-iranSans text-xs mr-1"}> تومان</span>
                                    </div>
                                    <Image src={"/icons/close.svg"} width={6} height={6} alt={"icons"} className={"ml-2"}/>
                                    <span className={"ml-0.5"}>{toFarsiNumber(item.orderNum)}</span>
                                </div>
                            </div>
                        ))
                    }
                    {
                        order.costs.map((item, i) => (
                            <div className={"h-8 px-4 flex justify-between items-center font-iranSans text-sm"} key={i}>
                                <span className={clsx(item.title === "تخفیف" ? "text-accent-main" : "text-carbon-main")}>{item.title}</span>
                                <div className={clsx( item.title === "تخفیف" ? "text-accent-main" : "text-carbon-main" ,"inline-flex items-center")}>
                                    {toFarsiNumber(priceFormatting(item.price))}
                                    <span className={"text-carbon-light text-xs mr-1"}> تومان</span>
                                </div>
                            </div>
                        ))
                    }
                    <div className={"border-t-carbon-alphaLight h-8 py-2 px-4 flex justify-between items-center border-t-[0.0625rem]"}>
                        <span className={"font-iRANSansBold text-sm text-carbon-main"}>مجموع</span>
                        <div className={"text-carbon-main font-iRANSansBold flex items-center text-sm"}>
                            {toFarsiNumber(priceFormatting(order.totalBillPrice))}
                            <span className={"text-carbon-light font-iranSans text-xs mr-1"}> تومان</span>
                        </div>
                    </div>
                    <div className={"m-3"}>
                        <div className={"border-[rgb(235,237,240)] mt-3 p-3 shadow-sp-small flex justify-between items-center rounded-[8px] border-[0.0625rem]"}>
                            <div className={"flex items-baseline"}>
                                <p className={"ml-1 font-iRANSansBold text-base text-carbon-main"}>{toFarsiNumber(order.orderClubPoint)}</p>
                                <p className={"font-iranSans text-xs text-carbon-main"}>امتیاز دریافت کرده‌اید</p>
                            </div>
                            <Image src={"/icons/clube-badge-bill.svg"} width={68} height={25} alt={"icons"} className={"mr-1"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}