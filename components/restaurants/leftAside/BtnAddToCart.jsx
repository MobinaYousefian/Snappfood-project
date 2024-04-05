"use client"
import clsx from "clsx";
import {useDispatch} from "react-redux";
import {handleAddFood, handleDeleteFood} from "@/redux/features/cartSlice";
import Image from "next/image";
import {toFarsiNumber} from "@/utils/numberConverter";
import {handleCloseFoodModal} from "@/redux/features/foodDataSlice";
import {useParams} from "next/navigation";

export const BtnAddToCart = ({partyRemain, food, counter, foodTag}) => {
    const dispatch = useDispatch();
    const params = useParams();


    const handlePlusCart = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (counter === partyRemain) {
            alert("موجودی کافی نیست!")
        }else {
            dispatch(handleAddFood({food : food, priceTag : foodTag, counter : 1}))
        }
    }

    const handleAddCart = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (food.isParty === true && !params.restaurantId) {
            dispatch(handleCloseFoodModal())
        }else {
            dispatch(handleAddFood({food : food, priceTag : foodTag, counter : 1}))
        }
    }

    const handleDeleteCart = (e) => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(handleDeleteFood(foodTag))
    }

    return (
        <div className={"flex flex-col items-center"}>
            {
                counter > 0 ?
                    <div className={"items-center justify-center flex min-h-[2.3125rem]"}>
                            {
                                counter === 1 ?
                                    <button onClick={handleDeleteCart} className={"hover:bg-inactive-main py-[1px] px-[6px] min-w-8 bg-clip-padding rounded-full w-8 h-8 transition-socialFooter inline-flex items-center justify-center font-iRANSansBold text-sm"}>
                                        <Image src={"/icons/delete-gray.svg"} width={12} height={14} alt={"icon"}/>
                                    </button>
                                    :
                                    <button onClick={handleDeleteCart} className={"fill-accent-main py-[1px] px-[6px] shadow-sp-medium bg-surface-light text-accent-main border-accent-alphaLight border-[0.09375rem] min-w-8 bg-clip-padding rounded-full w-8 h-8 transition-socialFooter flex items-center justify-center font-iRANSansBold text-sm"}>
                                        <svg width={10} height={10} viewBox={"0 0 12 2"} className={""}>
                                            <path d={"M1 2C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H11C11.5523 0 12 0.447715 12 1C12 1.55228 11.5523 2 11 2H1Z"}/>
                                        </svg>
                                    </button>
                            }
                        <span className={"text-center w-12 font-iRANSansBold text-sm text-carbon-main"}>{toFarsiNumber(counter)}</span>
                        <button onClick={handlePlusCart} className={"button fill-accent-main py-[1px] px-[6px] shadow-sp-medium bg-surface-light text-accent-main border-accent-alphaLight border-[0.09375rem] min-w-8 bg-clip-padding rounded-full w-8 h-8 transition-socialFooter inline-flex items-center justify-center font-iRANSansBold text-sm"}>
                            <svg width={10} height={10} viewBox={"0 0 12 12"} className={""}>
                                <path d={"M7 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H7V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H5V1C5 0.447715 5.44772 0 6 0C6.55228 0 7 0.447715 7 1V5Z"}/>
                            </svg>
                        </button>
                    </div>
                    :
                    <button onClick={handleAddCart} disabled={partyRemain === 0} className={clsx(partyRemain === 0 ? "text-inactive-dark" : "text-accent-main button", "shadow-sp-medium bg-clip-padding bg-surface-light rounded-[3rem] border-accent-alphaLight border-[0.09375rem] min-w-[6.6875rem] transition-socialFooter inline-flex items-center justify-center font-iranSans text-sm h-[2.3125rem]")}>
                        افزودن
                    </button>
            }
        </div>
    )
}
