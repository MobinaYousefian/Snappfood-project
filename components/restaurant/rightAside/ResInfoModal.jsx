'use client'
import {CommentSection, ResInfo, ScoresResInfo} from "@/components";
import {useSelector} from "react-redux";

export const ResInfoModal = ({resInfo}) => {
    const {isOpenModal} = useSelector(state => state.resInfoModal)

    if (isOpenModal === false) return null;
    return (
        <div className={"modal-card-animation flex justify-center items-center fixed inset-0 z-[9999]"}>
            <div className={"resInfoModal-animation rounded-xl bg-surface-light shadow-sp-modal max-h-[90vh] overflow-hidden"}>
                <div className={"flex flex-col w-[45rem]"}>
                    <ResInfo resInfo={resInfo}/>
                    <section className={"overflow-y-auto h-[calc(-16rem+90vh)]"}>
                        <ScoresResInfo resInfo={resInfo}/>
                        <div className={"p-4 flex justify-between"}>
                            <p className={"font-iRANSansBold text-base text-carbon-light"}>نظرات کاربران</p>
                            <div className={"flex items-center"}>
                                <span className={"ml-2.5 text-xs text-carbon-main font-iRANSansBold"}>به ترتیب</span>
                                <div className={"relative bg-carbon-alphaLight rounded-xl cursor-pointer flex items-center"}>
                                    <div className={"ease-in-out duration-100 transition-all translate-x-0 rounded-[0.625rem] bg-surface-light mr-0.5 h-[2.25rem] absolute w-[50%]"}/>
                                    <div className={"w-[7.3125rem] p-2.5 items-center justify-center flex z-[2]"}>
                                        <p className={"text-carbon-main text-sm font-iranSans"}>جدیدترین</p>
                                    </div>
                                    <div className={"w-[7.3125rem] p-2.5 items-center justify-center flex z-[2]"}>
                                        <p className={"text-carbon-main text-sm font-iranSans"}>مرتبط‌ترین</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CommentSection resInfo={resInfo}/>
                    </section>
                </div>
            </div>
        </div>
    )
}