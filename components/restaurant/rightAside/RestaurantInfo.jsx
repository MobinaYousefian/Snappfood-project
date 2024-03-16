import Image from "next/image";
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";

export const RestaurantInfo = ({resInfo}) => {

    return (
        <section>
            <header className={"flex items-center mb-6"}>
                <div className={"items-center justify-center flex shadow-sp-high rounded-xl bg-surface-light ml-3 relative w-[5.5rem] h-[5.5rem]"}>
                    <Image src={resInfo.avatar} width={82} height={82} alt={resInfo.name} className={"border-carbon-alphaLight border-[1px] rounded-xl"}/>
                </div>
                <div className={"flex-col flex w-[70%]"}>
                    <div className={"flex justify-between items-center"}>
                        <div>
                            <div className={"flex items-center"}>
                                <span className={"flex items-center ml-2"}>
                                <Image src={"/icons/star.svg"} width={12} height={12} alt={"icon"} className={"ml-1 align-middle"}/>
                                <span className={"font-iRANSansBold text-xs text-carbon-main"}>
                                    {toFarsiNumber(resInfo.star)}
                                </span>
                            </span>
                                <p className={"font-iranSans text-xs text-inactive-dark"}>
                                    {`(${toFarsiNumber(priceFormatting(resInfo.rating))} امتیاز)`}
                                </p>
                            </div>
                        </div>
                    </div>
                    <h1 className={"overflow-hidden text-ellipsis whitespace-nowrap font-iRANSansBold text-lg text-carbon-main mt-3.5"}>
                        {resInfo.name}
                    </h1>
                </div>
            </header>
            <div className={"flex-wrap flex items-center mb-6"}>
                <button className={"max-[1201px]:mt-2.5 shadow-sp-medium bg-clip-padding bg-surface-light rounded-[3rem] border-accent2-alphaLight border-[0.09375rem] h-10 w-full justify-center items-center inline-flex transition-socialFooter min-w-[6.6875rem]"}>
                    <Image src={"/icons/info-green.svg"} width={17} height={17} alt={"icon"} className={"w-[1.0625rem] h-[1.0625rem]"}/>
                    <p className={"mr-2 font-iranSans text-sm text-accent2-main"}>
                        اطلاعات و نظرات
                    </p>
                </button>
            </div>
        </section>
    )
}