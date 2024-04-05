'use client'
import {CommentSection, ResInfo, ScoresResInfo} from "@/components";
import {useSelector} from "react-redux";
import {useRef} from "react";

export const ResInfoModal = ({resInfo}) => {
    const {isOpenModal} = useSelector(state => state.resInfoModal)
    const {isOpenFoodModal, foodData} = useSelector(state => state.foodData);
    const divRef = useRef(null);

    let comments
    if (isOpenFoodModal === true) {
        comments = foodData.comments
    }else {
        comments = resInfo.comments
    }

    const shuffleArray  = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array
    }

    const handleShuffleComments = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (divRef.current) {
            divRef.current.style.transition = "translateX(-133px)"
        }
        comments = shuffleArray(comments)
    }

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
                                    <div ref={divRef} className={"ease-in-out duration-100 transition-all translate-x-0 rounded-[0.625rem] bg-surface-light mr-0.5 h-[2.25rem] absolute w-[50%]"}/>
                                    <div className={"w-[7.3125rem] p-2.5 items-center justify-center flex z-[2]"}>
                                        <p className={"text-accent2-main text-sm font-iranSans"}>جدیدترین</p>
                                    </div>
                                    <div onClick={handleShuffleComments} className={"w-[7.3125rem] p-2.5 items-center justify-center flex z-[2]"}>
                                        <p className={"text-carbon-main text-sm font-iranSans"}>مرتبط‌ترین</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CommentSection comments={comments}/>
                    </section>
                </div>
            </div>
        </div>
    )
}