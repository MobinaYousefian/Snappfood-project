'use client'
import clsx from "clsx";
import {useRouter, useSearchParams} from "next/navigation";

const filterOption = [
    {name : "پیک اسنپ‌فود", q : "express"},
    {name : "دارای کوپن", q: "coupon"},
    {name : "دارای تخفیف", q: "discount"},
    {name : "فودپرو", q: "foodPro"},
    {name : "به‌صرفه", q: "efficient"},
    {name : "خوش‌قیمت", q: "economic"},
];

export const ResFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const noQuery = router.toString() === "/restaurant"

    const handleResFilterUrl = (q) => {
        if (q) {
            if (searchParams.has(`${q}`)) {
                const urlSearchParams = new URLSearchParams(searchParams);
                urlSearchParams.delete(`${q}`);
                router.push(`/restaurant?${urlSearchParams}`);
            }else {
                const urlSearchParams = new URLSearchParams(searchParams);
                urlSearchParams.append(`${q}`, `${true}`);
                router.push(`/restaurant?${urlSearchParams}`);
            }
        }else {
            const urlSearchParams = new URLSearchParams(searchParams);
            urlSearchParams.set(`${q}`, `${true}`);
            router.push(`/restaurant?${urlSearchParams}`);
        }
    }

    return (
        <div className={"flex shadow-sp-small rounded-xl mb-2 p-4 border-carbon-alphaLight border-[1px]"}>
            <div className={"grow flex flex-col flex-wrap"}>
                {
                    filterOption.map( (item , i) => (
                        <div key={i} className={clsx(i !== filterOption.length-1 && "border-b-carbon-alphaLight border-b-[1px]" ,"flex justify-between items-center min-h-[3.4375rem]")}>
                            <span className={"font-iranSans text-sm text-carbon-main"}>{item.name}</span>
                            <label onClick={() => handleResFilterUrl(item.q)} className={"inline-flex items-center select-none ResFilterLabel"}>
                                <input type={"checkbox"} className={"hidden ResFilterInput"}/>
                                <span className={clsx(noQuery ? "noQuery" : "" ,"span ease-in-out duration-[0.4s] transition-all p-0.5 inline-block w-10 h-6 relative cursor-pointer select-none bg-carbon-alphaLight rounded-[1.5rem]")}/>
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}