import Image from "next/image";
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";

export const FoodSection = ({food, resName}) => {

    return (
        <div className={"FoodSection p-[calc(0rem)] border-b-[0.0625rem] w-full border-surface-dark odd:border-l-[0.0625rem]"}>
            <section className={"h-full py-4 flex flex-col"}>
                <div className={"cursor-pointer px-4 flex pb-1.5"}>
                    <div className={"flex flex-col grow pt-4 pl-4"}>
                        <h2 className={"font-iRANSansBold text-base text-carbon-main"}>
                            {food.name}
                        </h2>
                        <p className={"mt-2 break-words font-iranSans text-xs text-inactive-dark"}>
                            {food.ingredients}
                        </p>
                    </div>
                    <div className={"relative shrink-0"}>
                        <Image src={food.photos[0]} width={200} height={200} alt={`${food.name} از ${resName}`} className={"rounded-lg w-[112px] h-[112px]"}/>
                    </div>
                </div>
                {
                    food.price.map((item, i) => (
                        <div className={"div transition-socialFooter hover:bg-[rgba(235,237,240,0.25)] flex flex-col"} key={i}>
                            <footer className={"mt-2 flex justify-between items-center"}>
                                <div className={"items-center justify-between flex ease-in-out duration-300 transition-all px-3 w-full min-h-[3.5625rem]"}>
                                    <div className={"flex flex-col"}>
                                        <p className={"font-iranSans text-xs text-carbon-main"}>
                                            {item.tag}
                                        </p>
                                        <div className={"inline-flex flex-col items-start"}>
                                            <span className={"font-iRANSansBold text-sm text-carbon-main"}>
                                                {toFarsiNumber(priceFormatting(item.value))}
                                                <span className={"font-iranSans text-xs text-carbon-light"}> تومان</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className={"flex flex-col items-center"}>
                                        <button className={"button shadow-sp-medium bg-clip-padding bg-surface-light text-accent-main rounded-[3rem] border-accent-alphaLight border-[0.09375rem] min-w-[6.6875rem] transition-socialFooter inline-flex items-center justify-center font-iranSans text-sm h-[2.3125rem]"}>
                                            افزودن
                                        </button>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}