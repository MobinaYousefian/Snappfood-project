'use client'
import {useSelector} from "react-redux";
import Image from "next/image";
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";

export const StateBadge = ({resInfo}) => {
    const {selected} = useSelector(state => state.addressModal);
    const isInCity = selected.city === resInfo.city

    return (
        <>
            {
                isInCity ?
                    <div className={"mb-2 py-1 px-3 bg-surface-light border border-carbon-alphaLight rounded-lg"}>
                        <div className={"flex-1 py-3 flex items-center"}>
                            <div className={"flex items-center"}>
                                <Image src={resInfo.delivery.express ? "/icons/snappExpress.svg" : "/icons/deliveryman.svg"} width={20} height={20} alt={"icon"} className={"w-5 h-5 ml-4"}/>
                                <p className={"font-iranSans text-xs text-carbon-main"}>{resInfo.delivery.type}</p>
                                <span className={"font-iRANSansBold text-xs text-carbon-main mr-1"}>{toFarsiNumber(priceFormatting(resInfo.delivery.price))}</span>
                                <span className={"font-iranSans text-xs text-carbon-main mx-1"}>تومان</span>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={"mt-0 p-3 bg-surface-light border border-carbon-alphaLight rounded-lg"}>
                        <div className={"px-6 pb-6 flex-col flex items-center text-center"}>
                            <div className={"mt-6 mb-5"}>
                                <Image src={"/icons/vendors.svg"} width={120} height={114} alt={"icon"}/>
                            </div>
                            <p className={"font-iranSans text-sm text-carbon-main"}>امکان سفارش از فروشگاه‌های دیگر در منطقه شما وجود دارد.</p>
                        </div>
                        <button className={"bg-clip-padding bg-accent2-main text-surface-light rounded-md border-accent2-main border-[0.09375rem] h-10 min-w-[6.6875rem] transition-socialFooter inline-flex items-center justify-center w-full pt-[6px] pb-[6px]"}>
                            <span className={"text-surface-light text-sm font-iRANSansBold drop-shadow[0_1px_0_#0000003d]"}>مشاهده ۴۰+ فروشگاه دیگر</span>
                        </button>
                    </div>
            }
        </>

    )
}