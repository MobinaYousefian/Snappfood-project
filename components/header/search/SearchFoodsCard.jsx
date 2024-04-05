'use client'
import Image from "next/image";
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";

export const SearchFoodsCard = ({item, restaurants}) => {

    const resInfo = restaurants.filter(({id}) => id === item.resId)[0];
    const discountPrice = item.price[0].value * ((100-resInfo.discountNumber)/100);

    return (
        <div className={"px-5 pt-5 flex flex-col after:block after:pt-5 after:pr-5 after:border-b-[rgb(235,237,240)] after:border-b"}>
            <div className={"flex"}>
                <Image src={item.photos[0]} width={466} height={466} alt={"icon"} className={"ml-4 w-[56px] h-[56px] rounded-[4px]"}/>
                <div className={"flex flex-col text-xs"}>
                    <span className={"font-iRANSansBold text-carbon-main"}>{item.name}</span>
                    <span className={"mt-3 font-iranSans text-[#a3a3a3]"}>{item.resName}</span>
                </div>
            </div>
            <div className={"w-full mt-3 flex justify-between"}>
                <div className={"flex items-center text-carbon-main font-iranSans text-xs"}>
                    <span className={"text-carbon-light mx-1"}>{resInfo.delivery.type}</span>
                    <span className={"flex items-center mr-0.5"}>
                        {toFarsiNumber(priceFormatting(resInfo.delivery.price))}
                        <span className={"text-carbon-light mr-0.5"}> تومان</span>
                    </span>
                </div>
                <div className={"flex"}>
                    {
                        resInfo.discountNumber &&
                        <span className={"font-iRANSansBold text-accent-main m-1 bg-accent-alphaLight rounded grow justify-center items-center flex text-sm px-1 pb-0.5 pt-1.5"}>
                            {toFarsiNumber(resInfo.discountNumber)}
                            <Image src={"/icons/percentage.svg"} width={8} height={10} alt={"icon"} className={"mr-1"}/>
                        </span>
                    }
                    <div className={"flex items-center"}>
                        {
                            resInfo.discountNumber &&
                            <s className={"mx-1 font-iranSans text-xs text-inactive-dark line-through"}>{toFarsiNumber(priceFormatting(item.price[0].value))}</s>
                        }
                        <span className={"font-iRANSansBold text-base text-carbon-main"}>
                            {resInfo.discountNumber ? toFarsiNumber(priceFormatting(discountPrice)) : toFarsiNumber(priceFormatting(item.price[0].value))}
                            <span className={"font-iranSans text-xs text-carbon-light"}>  تومان</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}