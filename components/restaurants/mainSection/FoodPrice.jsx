'use client'
import {BtnAddToCart, RegularPrice} from "@/components";
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";
import Image from "next/image";
import clsx from "clsx";
import {useSelector} from "react-redux";

export const FoodPrice = ({food ,item, discountNumber, partyDiscount, partyRemain}) => {
    const discountPrice = item.value * ((100-discountNumber)/100);
    const partyPrice = item.value * ((100-partyDiscount)/100);

    const {basket} = useSelector(state => state.cart);
    let counterNumber
    if (basket.filter(({priceTag}) => priceTag === item.tag).length > 0) {
        counterNumber = basket.filter(({priceTag}) => priceTag === item.tag)[0].counter
    }

    return (
        <div className={clsx(partyRemain < 1 ? "" : "hover:bg-[rgba(235,237,240,0.25)]", "div transition-socialFooter flex flex-col")}>
            <footer className={"mt-2 flex justify-between items-center"}>
                <div className={"items-center justify-between flex ease-in-out duration-300 transition-all px-3 w-full min-h-[3.5625rem]"}>
                    <div className={"flex flex-col"}>
                        <p className={"font-iranSans text-xs text-carbon-main"}>
                            {item.tag !== food.name ? item.tag : ""}
                        </p>
                        {
                            partyDiscount || item.isDiscount === true ?
                                <div className={"inline-flex flex-col"}>
                                    <div className={"inline-flex"}>
                                        <span className={clsx( partyRemain === 0 ? "grayscale text-carbon-main bg-carbon-alphaLight" : "text-accent-main bg-accent-alphaLight", "font-iRANSansBold text-sm m-1 rounded px-1 flex justify-center items-center grow py-0.5")}>
                                            {partyDiscount ? toFarsiNumber(partyDiscount) : toFarsiNumber(discountNumber)}
                                            <span className={"mr-1"}>
                                                <Image src={"/icons/percentage.svg"} width={8} height={10} alt={"icon"}/>
                                            </span>
                                        </span>
                                        <div className={"inline-flex flex-col items-start"}>
                                            <s className={"mx-0 font-iranSans text-xs text-inactive-dark line-through"}>
                                                {toFarsiNumber(priceFormatting(item.value))}
                                            </s>
                                            <span className={clsx(partyRemain === 0 ? "text-inactive-dark" : "text-carbon-main", "font-iRANSansBold text-sm")}>
                                                {partyDiscount ? toFarsiNumber(priceFormatting(partyPrice)) : toFarsiNumber(priceFormatting(discountPrice))}
                                                <span className={clsx(partyRemain === 0 ? "text-inactive-dark" : "text-carbon-light", "font-iranSans text-xs")}> تومان</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                : <RegularPrice item={item}/>
                        }
                    </div>
                    <BtnAddToCart partyRemain={partyRemain} food={food} counter={counterNumber} foodTag={item.tag}/>
                </div>
            </footer>
        </div>
    )
}