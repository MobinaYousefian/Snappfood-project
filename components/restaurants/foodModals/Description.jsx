'use client'
import {useSelector} from "react-redux";
import Image from "next/image";
import {toFarsiNumber} from "@/utils/numberConverter";

export const Description = () => {
    const {foodData} = useSelector(state => state.foodData);

    return (
        <>
            <div className={"text-carbon-main font-iRANSansBold mb-4 flex justify-between items-center"}>
                <p className={"text-lg"}>{foodData.name}</p>
                <span className={"sp-laptop:flex border-[0.0625rem] border-[rgb(235,237,240)] px-1.5 rounded py-0.5"}>
                    <Image src={"/icons/star.svg"} width={12} height={12} alt={"icons"} className={"ml-1 align-middle w-[12px] h-[12px]"}/>
                    <span className={"text-xs"}>{toFarsiNumber(foodData.star)}</span>
                </span>
            </div>
            <div className={"mb-10 flex"}>
                <p className={"font-iranSans text-sm text-carbon-main"}>{foodData.ingredients}</p>
            </div>
        </>
    )

}