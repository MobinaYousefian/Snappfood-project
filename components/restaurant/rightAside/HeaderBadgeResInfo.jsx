'use client'
import Image from "next/image";
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";
import {useDispatch, useSelector} from "react-redux";
import {handleCloseVendorShift, handleOpenVendorShift} from "@/redux/features/resInfoModalSlice";

export const HeaderBadgeResInfo = ({resInfo}) => {
    const {isOpenVendorShift} = useSelector(state => state.resInfoModal)
    const dispatch = useDispatch();

    return(
        <div className={"my-2 flex justify-around items-center"}>
            <div className={"flex flex-col items-center"}>
                <Image src={"/icons/work-hours.svg"} width={18} height={18} alt={"icons"} className={"w-[1.125rem] h-[1.125rem]"}/>
                <p className={"text-carbon-main text-xs font-iranSans mb-1 mt-2.5"}>ساعت کاری</p>
                <p className={"items-baseline flex text-carbon-main text-xs font-iRANSansBold"}>
                    <span className={"text-accent2-main ml-1"}>باز</span>
                    {resInfo.workHour}
                    {
                        isOpenVendorShift === false ?
                        <Image onClick={() => dispatch(handleOpenVendorShift())} src={"/icons/arrow-down-gray.svg"} width={11} height={9} alt={"icons"} className={"cursor-pointer mr-1 w-[0.6875rem] relative top-[0.0625rem]"}/>
                            :
                        <Image onClick={() => dispatch(handleCloseVendorShift())} src={"/icons/arrow-up-gray.svg"} width={11} height={9} alt={"icons"} className={"cursor-pointer mr-1 w-[0.6875rem] relative top-[0.0625rem]"}/>
                    }
                </p>
            </div>
            <div className={"flex flex-col items-center"}>
                <Image src={"/icons/payment-method.svg"} width={19} height={14} alt={"icons"} className={"w-[1.1875rem] h-[0.875rem]"}/>
                <p className={"text-carbon-main text-xs font-iranSans mb-1 mt-2.5"}>شیوه‌های پرداخت</p>
                <p className={"font-iRANSansBold text-xs text-carbon-main"}>{resInfo.payMethod.isOnline ? "آنلاین" : resInfo.payMethod.isCredit ? "اعتبار جایزه خرید" : resInfo.payMethod.isBoth ? "آنلاین، اعتبار جایزه خرید" : ""}</p>
            </div>
            <div className={"flex flex-col items-center"}>
                <Image src={"/icons/minBuy-cart.svg"} width={19} height={19} alt={"icons"} className={"w-[1.1875rem] h-[1.1875rem]"}/>
                <p className={"text-carbon-main text-xs font-iranSans mb-1 mt-2.5"}>حداقل سبد خرید</p>
                <div className={"items-baseline inline-flex font-iRANSansBold text-sm text-carbon-main"}>
                    {toFarsiNumber(priceFormatting(resInfo.minBuy))}
                    <span className={"font-iranSans text-carbon-light text-xs mr-0.5"}> تومان</span>
                </div>
            </div>
        </div>
    )
}