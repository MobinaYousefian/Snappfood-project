import {DiscountPrice, RegularPrice} from "@/components";

export const FoodPrice = ({item, discountNumber}) => {

    return (
        <div className={"div transition-socialFooter hover:bg-[rgba(235,237,240,0.25)] flex flex-col"}>
            <footer className={"mt-2 flex justify-between items-center"}>
                <div className={"items-center justify-between flex ease-in-out duration-300 transition-all px-3 w-full min-h-[3.5625rem]"}>
                    <div className={"flex flex-col"}>
                        <p className={"font-iranSans text-xs text-carbon-main"}>
                            {item.tag}
                        </p>
                        {
                            item.isDiscount === true ?
                                <DiscountPrice item={item} discountNumber={discountNumber}/> :
                                <RegularPrice item={item}/>
                        }
                    </div>
                    <div className={"flex flex-col items-center"}>
                        <button className={"button shadow-sp-medium bg-clip-padding bg-surface-light text-accent-main rounded-[3rem] border-accent-alphaLight border-[0.09375rem] min-w-[6.6875rem] transition-socialFooter inline-flex items-center justify-center font-iranSans text-sm h-[2.3125rem]"}>
                            افزودن
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    )
}