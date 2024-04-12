import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";
import Image from "next/image";
import {BtnAddToCart} from "@/components";

export const CartFoodItem = ({food, priceTag, resInfo, counter, extras, extraPrice}) => {

    const foodBasePrice = food.price.filter(({tag}) => tag === priceTag)[0]
    const discountPrice = foodBasePrice.value * ((100-(resInfo.discountNumber))/100);
    const partyPrice = foodBasePrice.value * ((100-(food.partyDiscount))/100);

    return (
        <div className={"py-2 border-b border-b-carbon-alphaLight flex flex-col"}>
            <div className={"min-h-10 flex justify-between items-center"}>
                <span className={"font-iRANSansBold text-sm text-carbon-main"}>{food.name} {priceTag === food.name ? `` : `(${priceTag})`}</span>
            </div>
            {
                extras &&
                extras.map((item) => (
                    <div className={"py-3 flex justify-between items-center"} key={item.id}>
                        <p className={"font-iranSans text-xs text-carbon-main"}>{item.name}</p>
                        <div>
                            <span className={"font-iranSans text-sm text-carbon-main mr-[4px]"}>(</span>
                            <span className={"font-iranSans text-sm text-carbon-main"}>
                            {toFarsiNumber(priceFormatting(item.price))}
                                <span className={"text-xs text-carbon-light"}> تومان</span>
                            </span>
                            <span className={"font-iranSans text-sm text-carbon-main"}>)</span>
                        </div>
                    </div>
                ))
            }
            <div className={"h-10 flex justify-between items-center"}>
                <div className={"inline-flex items-center"}>
                    {
                        foodBasePrice.isDiscount === true || food.isParty === true ?
                            <span className={"h-8 text-accent-main text-sm font-iRANSansBold ml-1 bg-accent-alphaLight rounded flex justify-center items-center grow py-0.5 px-1"}>
                                {foodBasePrice.isDiscount === true ? toFarsiNumber(resInfo.discountNumber) : food.isParty === true ? toFarsiNumber(food.partyDiscount) : ""}
                                <span className={"mr-1"}>
                                    <Image src={"/icons/percentage.svg"} width={8} height={10} alt={"icon"} className={"min-w-[8px] min-h-[10px]"}/>
                                </span>
                            </span> : null
                    }
                    <div className={"flex-col inline-flex"}>
                        {
                            foodBasePrice.isDiscount === true || food.isParty === true ?
                                <>
                                    <s className={"font-iranSans text-xs text-inactive-dark line-through"}>
                                        {toFarsiNumber(priceFormatting(foodBasePrice.value))}
                                    </s>
                                    <span className={"font-iRANSansBold text-sm text-carbon-main"}>
                                        {foodBasePrice.isDiscount === true ? toFarsiNumber(priceFormatting(discountPrice + extraPrice)) : food.isParty === true ? toFarsiNumber(priceFormatting(partyPrice + extraPrice)) : ""}
                                        <span className={"font-iranSans text-xs text-carbon-light"}> تومان</span>
                                    </span>
                                </>
                                :
                                <span className={"font-iRANSansBold text-sm text-carbon-main"}>
                                    {toFarsiNumber(priceFormatting(foodBasePrice.value + extraPrice))}
                                    <span className={"font-iranSans text-xs text-carbon-light"}> تومان</span>
                                </span>
                        }
                    </div>
                </div>
                <BtnAddToCart
                    counter={counter}
                    foodTag={foodBasePrice.tag}
                    food={food}
                    partyRemain={food.partyRemain}
                />
            </div>
        </div>
    )
}