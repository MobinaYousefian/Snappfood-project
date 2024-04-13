'use client'
import Image from "next/image";
import {handleCloseOrdersModal, handleOpenBill, setBillId} from "@/redux/features/cartSlice";
import {useDispatch} from "react-redux";
import {useRouter} from "next/navigation";

export const OrderItem = ({order, index}) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleOpenBillModal = (e) => {
        e.preventDefault()
        e.stopPropagation();
        dispatch(setBillId(order.id))
        dispatch(handleOpenBill());
    }

    console.log(order.resId)
    const handleOpenRestaurant = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(handleCloseOrdersModal());
        router.push(`/restaurant/${order.resId}/${order.resName.split(" ").join("_").replace("(", "").replace(")", "")}`);
    }

    return (
        <div className={"pt-3 pb-2 flex justify-center border-b-[0.0625rem] border-b-[rgba(58,61,66,0.06)]"}>
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
                    index === 0 &&
                    <div className={"h-8 mt-4 px-2 bg-accent2-alphaMedium rounded flex justify-between items-center"}>
                        <p className={"leading-3 font-iranSans text-carbon-main text-[0.625rem]"}>نظرتان را درباره این سفارش به اشتراک بگذارید.</p>
                        <p className={"font-iRANSansBold text-xs cursor-pointer text-accent2-main ml-1"}>ثبت نظر</p>
                    </div>
                }
                <div className={"mt-3 mb-2 flex justify-center"}>
                    <button onClick={handleOpenBillModal} className={"py-[1px] px-[6px] flex-1 h-8 ml-4 flex justify-center items-center transition-socialFooter rounded-md bg-carbon-alphaLight bg-clip-padding min-w-[6.6875rem] border-[0.09375rem]  border-[rgba(58,61,66,0.06)]"}>
                        <Image src={"/icons/order-bill.svg"} width={17} height={18} alt={order.resName} className={"rotate-180 flex-[0_0_auto]"}/>
                        <p className={"mr-2 font-iRANSansBold text-sm text-carbon-main"}>مشاهده فاکتور</p>
                    </button>
                    <button onClick={handleOpenRestaurant} className={"py-[1px] px-[6px] flex-1 h-8 flex justify-center items-center transition-socialFooter rounded-md bg-carbon-alphaLight bg-clip-padding min-w-[6.6875rem] border-[0.09375rem]  border-[rgba(58,61,66,0.06)]"}>
                        <Image src={"/icons/reorder.svg"} width={16} height={16} alt={order.resName} className={"rotate-180 flex-[0_0_auto]"}/>
                        <p className={"mr-2 font-iRANSansBold text-sm text-carbon-main"}>سفارش مجدد</p>
                    </button>
                </div>
            </div>
        </div>
    )
}