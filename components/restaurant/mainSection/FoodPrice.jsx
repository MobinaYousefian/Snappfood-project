import {DiscountPrice, RegularPrice} from "@/components";
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";
import Image from "next/image";
import clsx from "clsx";

export const FoodPrice = ({item, discountNumber, partyDiscount, partyRemain}) => {
    const discountPrice = item.value * ((100-discountNumber)/100);
    const partyPrice = item.value * ((100-partyDiscount)/100);

    return (
        <div className={clsx(partyRemain > 0 ? "hover:bg-[rgba(235,237,240,0.25)]" : "", "div transition-socialFooter flex flex-col")}>
            <footer className={"mt-2 flex justify-between items-center"}>
                <div className={"items-center justify-between flex ease-in-out duration-300 transition-all px-3 w-full min-h-[3.5625rem]"}>
                    <div className={"flex flex-col"}>
                        <p className={"font-iranSans text-xs text-carbon-main"}>
                            {item.tag}
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
                    <div className={"flex flex-col items-center"}>
                        <button disabled={partyRemain === 0} className={clsx(partyRemain === 0 ? "text-inactive-dark" : "text-accent-main button", "shadow-sp-medium bg-clip-padding bg-surface-light rounded-[3rem] border-accent-alphaLight border-[0.09375rem] min-w-[6.6875rem] transition-socialFooter inline-flex items-center justify-center font-iranSans text-sm h-[2.3125rem]")}>
                            افزودن
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    )
}