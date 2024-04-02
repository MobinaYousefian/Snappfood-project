'use client'
import {useRouter, useSearchParams} from "next/navigation";
import clsx from "clsx";

const priceValue = ["همه", "اقتصادی", "متوسط", "گران"]

export const PriceFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const priceVal = searchParams.get("priceVal");


    const handlePriceFilterUrl = (i) => {
        if (i !== 0) {
            if (searchParams.has("priceVal")) {
                const urlSearchParams = new URLSearchParams(searchParams);
                urlSearchParams.set("priceVal", `${i}`);
                router.push(`/restaurant?${urlSearchParams}`)
            }else {
                const urlSearchParams = new URLSearchParams(searchParams);
                urlSearchParams.append("priceVal", `${i}`);
                router.push(`/restaurant?${urlSearchParams}`)
            }
        }else {
            const urlSearchParams = new URLSearchParams(searchParams);
            urlSearchParams.delete("priceVal");
            router.push(`/restaurant?${urlSearchParams}`)
        }
    }


    return (
        <div className={"max-[959px]:hidden flex-col flex shadow-sp-small rounded-xl mb-2 p-4 border-carbon-alphaLight border-[1px]"}>
            <p className={"font-iranSans text-xs text-carbon-main"}>کلاس قیمتی</p>
            <div className={"mt-4 relative bg-carbon-alphaLight rounded-xl cursor-pointer flex items-center"}>
                <div className={clsx( priceVal === "1" ? "translate-x-[-98%]" : priceVal === "2" ? "translate-x-[-196%]" : priceVal === "3" ? "translate-x-[-294%]" : "translate-x-[0%]" ,"bg-surface-light ease-in-out duration-100 transition-all rounded-[0.625rem] mr-0.5 h-9 absolute w-3/12")}>

                </div>
                {
                    priceValue.map( (item, i) => (
                        <div onClick={() => handlePriceFilterUrl(i)} key={i} className={"items-center justify-center flex p-2.5 w-[7.3125rem] z-[2]"}>
                            <p className={clsx( priceVal === `${i}` ? "text-accent2-main" : !priceVal && i === 0 ? "text-accent2-main" : "","font-iranSans text-sm")}>
                                {item}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}