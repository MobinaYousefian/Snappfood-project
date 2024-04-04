'use client'
import {useSelector} from "react-redux";
import clsx from "clsx";

const weekDays = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "پنجشنبه", "شنبه", "جمعه"]

export const VendorShifts = ({hours, isOffWeekend}) => {
    const {isOpenVendorShift} = useSelector(state => state.resInfoModal)

    const startTime = hours.split(" ")[3]
    const endTime = hours.split(" ")[5]

    console.log(startTime)
    console.log(endTime)

    return (
        <div className={clsx(!isOpenVendorShift ? "px-2 mx-6 shadow-none border-none h-0 opacity-0" : "mx-6 my-4 p-2 opacity-100 border-[0.0625rem] shadow-sp-small h-auto" ,"items-baseline justify-center overflow-hidden flex bg-surface-light rounded-lg text-carbon-main transition-all duration-200 ease-linear border-[rgb(235,237,240)]")}>
            {
                weekDays.map((item, i) => (
                    <div className={"grow flex justify-start flex-col items-center"} key={i}>
                        <p className={"text-carbon-light leading-3 mb-2 font-iranSans text-[0.625rem]"}>{item}</p>
                        <section className={"mb-2"}>
                            <div className={"text-xs text-carbon-main font-iranSans justify-center flex mb-2 mt-[0.3rem]"}>
                                {
                                    i === 6 && isOffWeekend === true ?
                                        <span>تعطیل</span>
                                        :
                                        <>
                                            <span>{startTime}</span>
                                            <span className={"text-inactive-alphaHigh mx-1"}>-</span>
                                            <span>{endTime}</span>
                                        </>
                                }
                            </div>
                        </section>
                    </div>
                ))
            }
        </div>
    )
}