import clsx from "clsx";

const filterOption = ["پیک اسنپ‌فود", "دارای کوپن", "دارای تخفیف", "فودپرو", "به‌صرفه", "خوش‌قیمت"];

export const ResFilter = () => {
    return (
        <div className={"flex shadow-sp-small rounded-xl mb-2 p-4 border-carbon-alphaLight border-[1px]"}>
            <div className={"grow flex flex-col flex-wrap"}>
                {
                    filterOption.map( (item , i) => (
                        <div key={i} className={clsx(i !== filterOption.length-1 && "border-b-carbon-alphaLight border-b-[1px]" ,"flex justify-between items-center min-h-[3.4375rem]")}>
                            <span className={"font-iranSans text-sm text-carbon-main"}>{item}</span>
                            <label className={"inline-flex items-center select-none "}>
                                <input type={"checkbox"} className={"hidden"}/>
                                <span className={"span ease-in-out duration-[0.4s] transition-all p-0.5 inline-block w-10 h-6 relative cursor-pointer select-none bg-carbon-alphaLight rounded-[1.5rem]"}/>
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}