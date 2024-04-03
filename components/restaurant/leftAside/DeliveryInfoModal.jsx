'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {closeDeliveryModal} from "@/redux/features/deliveryModalSlice";

export const DeliveryInfoModal = ({resInfo}) => {
    const {isOpen} = useSelector(state => state.deliveryModal)
    const dispatch = useDispatch();

    if (!isOpen) return null;
    return (
        <div className={"items-center flex-col flex bg-surface-light rounded-lg shadow-sp-high min-h-12 absolute top-[-56px] left-[-19.375rem] w-[19.375rem]"}>
            <div className={"py-[14px] px-[16px] flex items-center justify-between grow w-[calc(100%-32px)]"}>
                <div className={"flex items-center justify-center"}>
                    <Image src={"/icons/delivery-clock.svg"} width={18} height={18} alt={"icon"} className={"h-[1.125rem] w-[1.125rem] ml-4"}/>
                    <p className={"font-iranSans text-xs text-carbon-main"}>زمان دریافت سفارش</p>
                </div>
                <div onClick={() => dispatch(closeDeliveryModal())} className={"justify-center items-center flex cursor-pointer w-[20px] h-[20px]"}>
                    <Image src={"/icons/arrow-up-green.svg"} width={16} height={9} alt={"icon"}/>
                </div>
            </div>
            <div className={"cursor-pointer py-[14px] px-[16px] flex items-center justify-between grow w-[calc(100%-32px)]"}>
                <label className={"cursor-pointer inline-flex items-center select-none"}>
                    <input className={"hidden"}/>
                    <Image src={"/icons/checkBox.svg"} width={22} height={22} alt={"icon"} className={"rounded-full"}/>
                    <div className={" flex cursor-pointer flex-col mr-[16.83px]"}>
                        <p className={"font-iRANSansBold text-xs text-carbon-main"}>سریع‌ترین زمان ممکن</p>
                        <p className={"font-iranSans text-xs text-carbon-main"}>ارسال سریع بعد از ثبت سفارش</p>
                    </div>
                </label>
                <Image src={"/icons/order-delivery-time.svg"} width={20} height={20} alt={"icon"} className={"h-5 w-5"}/>
            </div>
            <hr className={"w-full border-t border-carbon-alphaLight grow"}/>
            <div className={"cursor-pointer py-[14px] px-[16px] flex items-center justify-between grow w-[calc(100%-32px)]"}>
                <label className={"cursor-pointer inline-flex items-center select-none"}>
                    <input className={"hidden"}/>
                    <Image src={"/icons/checkBox-empty.svg"} width={22} height={22} alt={"icon"} className={"rounded-full"}/>
                    <div className={"flex flex-col cursor-pointer mr-[16.83px]"}>
                        <p className={"font-iranSans text-xs text-carbon-main"}>زمان دیگر</p>
                    </div>
                </label>
            </div>
        </div>
    )
}