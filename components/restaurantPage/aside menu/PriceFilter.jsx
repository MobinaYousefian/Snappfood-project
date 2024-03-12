const priceVal = ["همه", "اقتصادی", "متوسط", "گران"]

export const PriceFilter = () => {
    return (
        <div className={"max-[959px]:hidden flex-col flex shadow-sp-small rounded-xl mb-2 p-4 border-carbon-alphaLight border-[1px]"}>
            <p className={"font-iranSans text-xs text-carbon-main"}>کلاس قیمتی</p>
            <div className={"mt-4 relative bg-carbon-alphaLight rounded-xl cursor-pointer flex items-center"}>
                <div className={"ease-in-out duration-100 transition-all rounded-[0.625rem] bg-surface-light mr-0.5 h-9 absolute w-3/12 translate-x-[0%]"}>

                </div>
                {
                    priceVal.map( (item, i) => (
                        <div key={i} className={"items-center justify-center flex p-2.5 w-[7.3125rem] z-[2]"}>
                            <p className={"font-iranSans text-sm text-carbon-main"}>
                                {item}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}