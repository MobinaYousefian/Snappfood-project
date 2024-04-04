import Image from "next/image";
import {PartyCountDown} from "@/components";

export const PartyHeader = () => {

    return (
        <div className={"items-center justify-between flex rounded-t-lg foodParty-gradiant px-[1.625rem] py-[0.875rem]"}>
            <div className={"flex"}>
                <Image src={"/icons/food-party.svg"} width={24} height={24} alt={"food-party"} className={"w-6 h-6"}/>
                <p className={"mr-1.5 font-iRANSansBold text-base text-surface-light"}>فود پارتی</p>
            </div>
            <div className={"flex"}>
                <PartyCountDown/>
                <Image src={"/icons/foodParty-countdown.svg"} width={18} height={18} alt={"icons"} className={"drop-shadow-[0-1px-0-rgba(0,0,0,0.24)]"}/>
            </div>
        </div>
    )
}