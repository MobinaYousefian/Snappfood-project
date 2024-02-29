import { getData } from "@/lib/dataFeching";
import Link from "next/link";

export const Cities = async () => {
    const {cities} = await getData()

    return (
        <div className={"box-border w-full p-8 bg-surface-light border-t-[0.0625rem] border-surface-dark border-solid"}>
            <h2 className={"mb-8 font-iRANSansBold text-base text-carbon-main inline-block"}>اسنپ‌ فود در شهرهای ایران</h2>
            <div className={"box-border flex flex-wrap w-full m-[calc(-0.25rem)]"}>
                {cities.map( (item, i) => (
                    <div key={i} className={"cities-mainPage max-h-[24.39px] max-w-[33.3333%] basis-1/3 p-[0.1875rem]"}>
                        <Link href={"/"}>
                            <p className={"inline-block text-center text-inactive-dark leading-3 font-iranSans text-[0.625rem]"}>{item}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}