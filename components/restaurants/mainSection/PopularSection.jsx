import {FoodCard} from "@/components";

export const PopularSection = ({resInfo}) => {
    const populars = resInfo.foods.filter(({isPopular}) => isPopular === true);

    if (!populars) return null;
    return (
        <>
            <p className={"h-12 text-carbon-light flex justify-center items-center font-iRANSansBold text-xs"}>
                پرطرفدارها
            </p>
            <div className={"flex-wrap flex m-[calc(0rem)] w-[calc(100%+0rem)] border-surface-dark border-t-[0.0625rem]"}>
                {
                    populars.map((food ,i) => (
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