import {FoodCard} from "@/components";

export const DiscountSection = ({resInfo}) => {
    const discounts = resInfo.foods.filter(({isDiscount}) => isDiscount === true);

    return (
        <>
            <p className={"h-12 text-carbon-light flex justify-center items-center font-iRANSansBold text-xs"}>
                تخفیف‌دارها
            </p>
            <div className={"flex-wrap flex m-[calc(0rem)] w-[calc(100%+0rem)] border-surface-dark border-t-[0.0625rem]"}>
                {
                    discounts.map((food ,i) => (
                        <FoodCard
                            key={i}
                            food={food}
                            resName={resInfo.name}
                            discountNumber={resInfo.discountNumber}
                        />
                    ))
                }
            </div>
        </>
    )
}