import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";

export const RegularPrice = ({item}) => {
    return (
        <div className={"inline-flex"}>
            <div className={"inline-flex flex-col items-start"}>
                <span className={"font-iRANSansBold text-sm text-carbon-main"}>
                    {toFarsiNumber(priceFormatting(item.value))}
                    <span className={"font-iranSans text-xs text-carbon-light"}> تومان</span>
                </span>
            </div>
        </div>
    )
}