'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {handleCloseResInfo} from "@/redux/features/resInfoModalSlice";
import {VendorShiftsMobile} from "@/components/restaurants/rightAside/mobileResInfoModal/VendorShiftsMobile";
import {ScoresResInfoMobile} from "@/components/restaurants/rightAside/mobileResInfoModal/ScoresResInfoMobile";
import {CommentSectionMobile} from "@/components/restaurants/rightAside/mobileResInfoModal/CommentSectionMobile";
import {InfoMobile} from "@/components/restaurants/rightAside/mobileResInfoModal/InfoMobile";

export const ResInfoModalMobile = ({resInfo}) => {
    const {isOpenModal} = useSelector(state => state.resInfoModal)
    const dispatch = useDispatch();

    const closeResInfoModal = () => {
        dispatch(handleCloseResInfo());
        document.body.style.overflow = "auto"
    }

    if (isOpenModal === false) return null;
    return (
        <div className={"modal-card-animation flex justify-center items-center fixed inset-0 z-[9999]"}>
            <div className={"resInfoModal-animation bg-surface-light shadow-sp-modal h-full overflow-y-auto"}>
                <div className={"flex flex-col w-full"}>
                    <div className={"flex justify-between py-[1.375rem] px-[1.625rem]"}>
                        <div onClick={closeResInfoModal} className={"cursor-pointer"}>
                            <Image src={"/icons/close.svg"} width={14} height={14} alt={"icons"} className={"w-3.5 h-3.5"}/>
                        </div>
                    </div>
                    <InfoMobile resInfo={resInfo}/>
                    <VendorShiftsMobile hours={resInfo.workHourDay} isOffWeekend={resInfo.isOffWeekend}/>
                    <section className={"overflow-y-auto h-[calc(-5rem+100vh)]"}>
                        <ScoresResInfoMobile resInfo={resInfo}/>
                        <div className={"p-4 flex-col justify-between mt-8 pt-8"}>
                            <p className={"font-iRANSansBold text-sm text-carbon-light"}>نظرات کاربران</p>
                            <div className={"flex items-center justify-center mt-2"}>
                                <span className={"ml-2.5 text-xs text-carbon-main font-iRANSansBold"}>به ترتیب</span>
                                <div className={"relative bg-carbon-alphaLight rounded-xl cursor-pointer flex items-center"}>
                                    <div className={"ease-in-out duration-100 transition-all translate-x-0 rounded-[0.625rem] bg-surface-light mr-0.5 h-[2rem] absolute w-[50%]"}/>
                                    <div className={"w-[6rem] p-2.5 items-center justify-center flex z-[2]"}>
                                        <p className={"text-accent2-main text-sm font-iranSans"}>جدیدترین</p>
                                    </div>
                                    <div className={"w-[6rem] p-2.5 items-center justify-center flex z-[2]"}>
                                        <p className={"text-carbon-main text-sm font-iranSans"}>مرتبط‌ترین</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CommentSectionMobile resInfo={resInfo}/>
                    </section>
                </div>
            </div>
        </div>
    )
}