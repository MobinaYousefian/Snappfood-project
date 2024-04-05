'use client'
import {useParams} from "next/navigation";
import Image from "next/image";
import {CommentSection, FoodInfo, PartyHeader} from "@/components";
import {useDispatch, useSelector} from "react-redux";
import {handleCloseFoodModal} from "@/redux/features/foodDataSlice";
import clsx from "clsx";

export const FoodModal = ({restaurants}) => {
    const {isOpenFoodModal, foodData} = useSelector(state => state.foodData);
    const dispatch = useDispatch();
    const params = useParams();
    let pageId
    let resInfo
    if (params.restaurantId) {
        pageId = params.restaurantId[0];
        resInfo = restaurants.filter(({id}) => id === (+pageId))[0]
    }else {
        resInfo = restaurants.filter(({name}) => name === foodData.resName)[0]
    }


    const closeFoodModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(handleCloseFoodModal());
        document.body.style.overflow = "auto";
    }

    if (isOpenFoodModal === false) return null;
    return (
        <div className={"inset-0 modal-card-animation flex justify-center items-center fixed z-[1000]"}>
            <div className={clsx("resInfoModal-animation rounded-xl bg-surface-light shadow-sp-modal max-h-[90vh] overflow-hidden")}>
                {
                    foodData.isParty === true ?
                        <PartyHeader/>
                        : null
                }
                <div className={"items-center h-[56px] w-full relative flex justify-between pl-[56px]"}>
                    <button onClick={closeFoodModal} className={"items-center justify-center flex py-[1px] px-[6px] w-[56px] h-[56px]"}>
                        <Image src={"/icons/close.svg"} width={14} height={14} alt={"icons"} className={"w-3.5 h-3.5"}/>
                    </button>
                    <p className={"font-iRANSansBold text-sm text-carbon-main"}> </p>
                </div>
                <div className={clsx(foodData.isParty === true ? "max-h-[calc(-8rem+90vh)]" : "max-h-[calc(-4rem+90vh)]" ,"flex flex-col overflow-auto min-w-[20rem] max-w-[45rem] sp-laptop:w-[90vw] w-[35vw]")}>
                    <FoodInfo resInfo={resInfo}/>
                    <div className={"p-4 flex justify-between"}>
                        <p className={"font-iRANSansBold text-base text-carbon-light"}>نظرات کاربران</p>
                    </div>
                    <CommentSection resInfo={resInfo}/>
                </div>
            </div>
        </div>
    )
}