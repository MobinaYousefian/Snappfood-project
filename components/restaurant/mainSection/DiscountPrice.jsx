import Image from "next/image";
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";

export const DiscountPrice = ({item, discountNumber}) => {
    const discountPrice = item.value * ((100-discountNumber)/100);


    return (
        <div className={"inline-flex flex-col"}>
            <div className={"inline-flex"}>
                <span className={"text-accent-main font-iRANSansBold text-sm m-1 bg-accent-alphaLight rounded px-1 flex justify-center items-center grow py-0.5"}>
                    {toFarsiNumber(discountNumber)}
                    <span className={"mr-1"}>
                        <Image src={"/icons/percentage.svg"} width={8} height={10} alt={"icon"}/>
                    </span>
                </span>
                <div className={"inline-flex flex-col items-start"}>
                    <s className={"mx-0 font-iranSans text-xs text-inactive-dark line-through"}>
                        {toFarsiNumber(priceFormatting(item.value))}
                    </s>
                    <span className={"font-iRANSansBold text-sm text-carbon-main"}>
                        {toFarsiNumber(priceFormatting(discountPrice))}
                        <span className={"font-iranSans text-xs text-carbon-light"}> تومان</span>
                    </span>
                </div>
            </div>
        </div>
    )
}