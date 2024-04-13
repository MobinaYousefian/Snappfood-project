import Image from "next/image";
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";

export const DeliveryType = (delivery) => {

    return (
        <div className={"shadow-sp-small rounded-[4.5rem] bg-surface-light px-3.5 py-[0.6875rem]"}>
            <div className={"flex items-center justify-center"}>
                <Image src={ delivery.express? "/icons/snappExpress.svg": "/icons/deliveryman-light.svg" } width={19} height={19} alt={"icons"} className={"ml-2 align-middle"}/>
                <p className={"ml-2 font-iranSans text-xs text-carbon-main"}>{delivery.type}</p>
                <div className={"ml-2 flex-col items-start inline-flex"}>
                        <span className={"font-iRANSansBold text-carbon-main text-xs"}>
                            {
                                toFarsiNumber(priceFormatting(delivery.price))
                            }
                            <span className={"font-iranSans"}> تومان</span>
                        </span>
                </div>
            </div>
        </div>
    )
}