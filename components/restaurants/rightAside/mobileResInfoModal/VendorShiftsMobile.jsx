'use client'
import clsx from "clsx";
import {useSelector} from "react-redux";

const weekDays = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "پنجشنبه", "شنبه", "جمعه"]

export const VendorShiftsMobile = ({isOffWeekend, hours}) => {
    const {isOpenVendorShift} = useSelector(state => state.resInfoModal)

    const startTime = hours.split(" ")[3]
    const endTime = hours.split(" ")[5]

    return (
        <div className={clsx(!isOpenVendorShift ? "px-2 mx-6 shadow-none border-none h-0 opacity-0" : "mx-6 my-4 p-5 opacity-100 border-[0.0625rem] shadow-sp-small h-auto" ,"items-baseline justify-center overflow-hidden flex-col bg-surface-light rounded-lg text-carbon-main transition-all duration-200 ease-linear border-[rgb(235,237,240)]")}>
            {
                weekDays.map((item, i) => (
                    <div className={"grow flex justify-between items-center"} key={i}>
                        <p className={"text-carbon-light mb-2 font-iranSans text-sm"}>{item}</p>
                        <section className={"mb-2"}>
                            <div className={"font-iRANSansBold text-sm text-carbon-main justify-center flex mb-2 mt-[0.3rem]"}>
                                {
                                    i === 6 && isOffWeekend === true ?
                                        <span>تعطیل</span>
                                        :
                                        <>
                                            <span>{startTime}</span>
                                            <span className={"text-inactive-dark mx-2"}> - </span>
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