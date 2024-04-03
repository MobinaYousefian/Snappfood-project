import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";
import Image from "next/image";
import clsx from "clsx";

export const PartyFoodCard = ({food}) => {
    const foodPrice = food.price[0].value
    const discountNum = food.partyDiscount
    const discountPrice = foodPrice * ((100-discountNum)/100);

    return (
        <div className={"rounded-lg flex-col justify-between flex drop-shadow-[0_1px_0_rgba(58,61,66,0.06)] cursor-pointer bg-surface-light overflow-hidden p-6 pt-3 mx-[0.1875rem] shadow-sp-high min-h-[23.125rem]"}>
            <h3 className={clsx(food.partyRemain === 0 ? "text-inactive-dark" : "text-carbon-dark", "text-center leading-3 grow-0 font-iranSans text-[0.625rem]")}>{food.resName}</h3>
            <div className={clsx( food.partyRemain === 0 ? "grayscale" : "grayscale-0" ,"grow-0 text-center rounded-[4.5rem]")}>
                <div className={clsx(food.partyRemain === 0 ? "text-inactive-dark" : "text-carbon-dark", "flex items-center justify-center")}>
                    <p className={"ml-2 font-iranSans leading-3 text-[0.625rem]"}>{food.resDelivery.type}</p>
                    <span className={"ml-2 font-iranSans leading-3 text-[0.625rem]"}>{toFarsiNumber(priceFormatting(food.resDelivery.price))}</span>
                </div>
            </div>
            <div className={clsx( food.partyRemain === 0 ? "grayscale text-inactive-dark" : "grayscale-0", "items-end justify-center flex grow-0 rounded-lg overflow-hidden mb-[1.9375rem] mt-5 mx-auto w-[7.125rem] h-[7.125rem]")}>
                <Image src={food.photos[0]} width={200} height={200} alt={food.name} className={"w-full h-full grow-0 grayscale-0"}/>
            </div>
            <h2 className={clsx( food.partyRemain === 0 ? "grayscale text-inactive-dark" : "grayscale-0", "text-center min-h-12 grow-0 font-iRANSansBold text-base text-carbon-main")}>{food.name}</h2>
            <div className={clsx( food.partyRemain === 0 ? "grayscale text-inactive-dark" : "grayscale-0", "my-6 grow-0 flex justify-between")}>
                <div className={"flex flex-col items-start"}>
                    <span className={clsx(food.partyRemain === 0 ? "text-inactive-dark" : "text-carbon-main","flex-row-reverse flex font-iRANSansBold text-xs")}>
                        <Image src={"/icons/star.svg"} width={12} height={12} alt={"icon"} className={"mr-1 align-middle"}/>
                        <span>{toFarsiNumber(food.star)}</span>
                    </span>
                    {
                        food.partyRemain > 0 ?
                            <div className={"mt-1 flex items-baseline"}>
                                <span className={clsx( food.partyRemain < 4 ? "text-alert-light" : "text-carbon-main" ,"ml-0.5 font-iRANSansBold text-sm")}>{toFarsiNumber(food.partyRemain)}</span>
                                <span className={clsx( food.partyRemain < 4 ? "text-alert-light" : "text-carbon-light" ,"mr-1 font-iranSans text-xs")}> عدد باقی مانده</span>
                            </div>
                            :
                            <div className={"mt-1 flex items-baseline"}>
                                <span className={clsx(food.partyRemain === 0 ? "text-inactive-dark" : "text-carbon-light" ,"mr-1 font-iranSans text-xs")}>اتمام موجودی</span>
                            </div>
                    }
                </div>
                <div className={clsx(food.partyRemain === 0 ? "text-inactive-dark" : "text-carbon-main", "flex justify-center items-end flex-col")}>
                    <div className={"flex-row-reverse mb-1 flex justify-center items-center"}>
                        <div className={"px-1 items-center justify-center flex bg-accent-main rounded-[0.25rem] h-4 mr-0.5"}>
                            <span className={clsx(food.partyRemain === 0 ? "text-inactive-dark" : "text-surface-main", "text-xs font-iRANSansBold mt-0.5")}>
                                {toFarsiNumber(food.partyDiscount)}
                            </span>
                            <Image src={"/icons/percentage-white.svg"} width={7} height={8} alt={"icon"} className={"mr-[0.1875rem]"}/>
                        </div>
                        <s className={"text-inactive-dark line-through text-xs font-iranSans ml-[0.1875rem]"}>{toFarsiNumber(priceFormatting(foodPrice))}</s>
                    </div>
                    <div className={"flex items-center justify-center"}>
                        <p className={"font-iRANSansBold text-sm"}>{toFarsiNumber(priceFormatting(discountPrice))}</p>
                        <p className={"text-xs font-iranSans mr-0.5"}> تومان</p>
                    </div>
                </div>
            </div>
            <div className={"w-full rounded-[4px] h-[2px]"}>
                <div className={clsx( food.partyRemain === 0 ?  "bg-surface-dark" : food.partyRemain < 4 ? "bg-alert-light" : "bg-inactive-dark" ,"duration-300 transition-all w-full rounded-[4px] h-[2px]")}> </div>
            </div>
        </div>
    )
}