'use client'
import Image from "next/image";
import Link from "next/link";
import {PartySlider} from "@/components/homePage/PartySlider";
import {PartyCountDown} from "@/components";
import {useSelector} from "react-redux";

export const FoodParty = ({partyFoods}) => {
    const {isShown} = useSelector(state => state.showParty);

    if (isShown === false) return null;
    if (partyFoods === undefined) return null;

    return (
        <section className={"mx-4 padding-size"}>
            <div className={"mb-20 max-[599px]:flex-col foodParty-radius foodParty-gradiant flex pl-10 py-[1.8125rem] min-h-[23.125rem]"}>
                <div className={"w-[15%] max-[599px]:w-full py-[1.1875rem] flex flex-col justify-between items-center grow shrink-0 basis-[15%]"}>
                    <div className={"items-center justify-center flex-col flex p-[0.3125rem]"}>
                        <div className={"flex justify-center items-center"}>
                            <PartyCountDown/>
                            <Image src={"/icons/foodParty-countdown.svg"} width={18} height={18} alt={"icons"} className={"drop-shadow-[0-1px-0-rgba(0,0,0,0.24)]"}/>
                        </div>
                    </div>
                    <div className={"p-[16px]"}>
                        <Image
                        src={"https://cdn.snappfood.ir/uploads/images/review-app/icons/count/jek/1_jek_non_active.png"}
                        width={104} height={110} alt={"food-party"} className={"max-h-[110px]"}/>
                    </div>
                    <div className={"flex p-[0.3125rem]"}>
                        <Image src={"/icons/food-party.svg"} width={24} height={24} alt={"food-party"} className={"w-6 h-6"}/>
                        <p className={"text-surface-main leading-9 text-[1.75rem] font-medium font-iranSans mr-1 drop-shadow-[0-1px-0-rgba(0,0,0,0.24)]"}>
                            فود پارتی
                        </p>
                    </div>
                    <p className={"text-surface-main text-xs font-light font-iranSans p-[0.3125rem] drop-shadow-[0-1px-0-rgba(0,0,0,0.24)]"}>
                        تخفیفات لحظه‌ای ویژه شما
                    </p>
                    <Link href={"/party"} className={"p-[0.3125rem]"}>
                        <div className={"items-center flex rounded-[3rem] bg-surface-light px-3 py-1.5"}>
                            <p className={"font-iranSans text-sm text-carbon-dark"}>مشاهده همه</p>
                            <Image src={"/icons/see-all-foodParty.svg"} width={9} height={16} alt={"icons"} className={"mr-4"}/>
                        </div>
                    </Link>
                </div>
                <div className={"relative max-[599px]:w-full w-[80%]"}>
                    <PartySlider partyFoods={partyFoods}/>
                </div>
            </div>
        </section>
    )
}