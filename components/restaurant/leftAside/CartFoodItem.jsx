import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";
import Image from "next/image";
import {BtnAddToCart} from "@/components";

export const CartFoodItem = ({food, priceTag, resInfo, counter}) => {

    const priceForTwoItemFoods = food.price.filter((item) => item.tag === priceTag)[0]
    const discountPrice = priceForTwoItemFoods.value * ((100-(resInfo.discountNumber))/100);
    const partyPrice = priceForTwoItemFoods.value * ((100-(food.partyDiscount))/100);

    return (
        <div className={"py-2 border-b border-b-carbon-alphaLight flex flex-col"}>
            <div className={"min-h-10 flex justify-between items-center"}>
                <span className={"font-iRANSansBold text-sm text-carbon-main"}>{food.name} {priceTag === food.name ? `` : `(${priceTag})`}</span>
            </div>
            <div className={"h-10 flex justify-between items-center"}>
                <div className={"inline-flex"}>
                    {
                        priceForTwoItemFoods.isDiscount === true || food.isParty === true ?
                            <span className={"text-accent-main text-sm font-iRANSansBold m-1 bg-accent-alphaLight rounded flex justify-center items-center grow py-0.left-0.5 px-1"}>
                                {priceForTwoItemFoods.isDiscount === true ? toFarsiNumber(resInfo.discountNumber) : food.isParty === true ? toFarsiNumber(food.partyDiscount) : ""}
                                <span className={"mr-1 "}>
                                    <Image src={"/icons/percentage.svg"} width={8} height={10} alt={"icon"}/>
                                </span>
                            </span> : null
                    }
                    <div className={"flex-col inline-flex"}>
                        {
                            priceForTwoItemFoods.isDiscount === true || food.isParty === true ?
                                <>
                                    <s className={"font-iranSans text-xs text-inactive-dark line-through"}>
                                        {toFarsiNumber(priceFormatting(priceForTwoItemFoods.value))}
                                    </s>
                                    <span className={"font-iRANSansBold text-sm text-carbon-main"}>
                                        {priceForTwoItemFoods.isDiscount === true ? toFarsiNumber(priceFormatting(discountPrice)) : food.isParty === true ? toFarsiNumber(priceFormatting(partyPrice)) : ""}
                                        <span className={"font-iranSans text-xs text-carbon-light"}> تومان</span>
                                    </span>
                                </>
                                :
                                <span className={"font-iRANSansBold text-sm text-carbon-main"}>
                                    {toFarsiNumber(priceFormatting(priceForTwoItemFoods.value))}
                                    <span className={"font-iranSans text-xs text-carbon-light"}> تومان</span>
                                </span>
                        }
                    </div>
                </div>
                <BtnAddToCart counter={counter} foodTag={priceForTwoItemFoods.tag} food={food} partyRemain={food.partyRemain}/>
            </div>
        </div>
    )
}