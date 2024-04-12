import Image from "next/image";
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";
import {handleCloseVendorShift, handleOpenVendorShift} from "@/redux/features/resInfoModalSlice";
import {useDispatch, useSelector} from "react-redux";

export const InfoMobile = ({resInfo}) => {
    const dispatch = useDispatch();
    const {isOpenVendorShift} = useSelector(state => state.resInfoModal)


    return (
        <>
            <div className={"pb-4 pl-4 pr-4 pt-0 flex-col"}>
                <div className={"flex"}>
                    <Image src={resInfo.avatar} width={96} height={96} alt={resInfo.name} className={"w-24 h-24 ml-5 rounded-xl shadow-sp-high"}/>
                    <div className={"flex flex-col text-carbon-main"}>
                        <p className={"font-iRANSansBold text-2xl mb-1"}>{resInfo.name}</p>
                        <p className={"font-iranSans text-sm mb-1"}>
                            {
                                resInfo.category.map((item) => {
                                    return `${item}، `
                                })
                            }
                        </p>
                    </div>
                </div>
                <section className={"justify-between flex h-24 w-full mt-4"}>
                    <p className={"items-baseline flex mb-1 font-iranSans text-xs text-carbon-light pl-2"}>
                        <Image src={"/icons/location.svg"} width={12} height={14} alt={"icons"} className={"top-1.5 relative mb-1 ml-[0.3125rem]"}/>
                        {resInfo.address}
                    </p>
                    <div className={"relative h-24 bg-[#ddd] border border-[#ddd] rounded-lg w-full min-w-[8rem] max-w-[12rem]"}>
                        <Image src={"/icons/map.png"} width={184} height={96} alt={"icons"} className={"h-full w-full z-[400] rounded-lg"}/>
                    </div>
                </section>
            </div>
            <div className={"my-2 flex justify-around items-center"}>
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
            <div className={"flex flex-col items-center my-4"}>
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
        </>
    )
}