'use client'
import Image from "next/image";
import {HeaderBadgeResInfo, VendorShifts} from "@/components";
import {useDispatch} from "react-redux";
import {handleCloseResInfo} from "@/redux/features/resInfoModalSlice";

export const ResInfo = ({resInfo}) => {
    const dispatch = useDispatch();

    const closeResInfoModal = () => {
        dispatch(handleCloseResInfo());
        document.body.style.overflow = "auto"
    }

    return (
        <div>
            <div className={"flex justify-between py-[1.375rem] px-[1.625rem]"}>
                <div onClick={closeResInfoModal} className={"cursor-pointer"}>
                    <Image src={"/icons/close.svg"} width={14} height={14} alt={"icons"} className={"w-3.5 h-3.5"}/>
                </div>
            </div>
            <div className={"pb-4 pl-4 pr-4 pt-0 justify-between flex"}>
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
                        <p className={"items-baseline flex mb-1 font-iranSans text-xs text-carbon-light"}>
                            <Image src={"/icons/location.svg"} width={12} height={14} alt={"icons"} className={"top-1.5 relative mb-1 ml-[0.3125rem]"}/>
                            {resInfo.address}
                        </p>
                    </div>
                </div>
                <section className={"relative rounded-lg bg-surface-dark overflow-hidden h-24 min-w-[11.5rem]"}>
                    <div className={"absolute h-24 relative bg-[#ddd] border border-[#ddd]"}>
                        <Image src={"/icons/map.png"} width={184} height={96} alt={"icons"} className={"h-full w-full z-[400] absolute"}/>
                        <button className={"transition-socialFooter hover:text-accent2-dark right-[14%] w-auto z-[999] top-0 absolute shadow-sp-medium bg-clip-padding bg-surface-light text-accent2-main rounded-[3rem] border-[rgba(0,133,66,0.06)] border-[0.09375rem] h-10 min-w-[8.6875rem] items-center justify-center flex mx-auto mt-[0.6rem]"}>
                            <p className={"font-iRANSansBold text-sm"}>مشاهده روی نقشه</p>
                            <Image src={"/icons/arrow-left-green.svg"} width={9} height={16} alt={"icons"} className={"mr-2"}/>
                        </button>
                    </div>
                </section>
            </div>
            <HeaderBadgeResInfo resInfo={resInfo}/>
            <VendorShifts hours={resInfo.workHourDay} isOffWeekend={resInfo.isOffWeekend}/>
        </div>
    )
}