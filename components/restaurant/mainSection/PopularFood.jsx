import {FoodSection} from "@/components";

export const PopularFood = ({resInfo}) => {
    const populars = resInfo.foods.filter(({isPopular}) => isPopular === true);
    console.log(populars)

    if (!populars) return null;
    return (
        <section id={"populars"} className={"scroll-mt-[4.375rem]"}>
            <p className={"h-12 text-carbon-light flex justify-center items-center font-iRANSansBold text-xs"}>
                پرطرفدارها
            </p>
            <div className={"flex-wrap flex m-[calc(0rem)] w-[calc(100%+0rem)] border-surface-dark border-t-[0.0625rem]"}>
                {
                    populars.map((food ,i) => (
                        <FoodSection key={i} food={food} resName={resInfo.name}/>
                       ))
                }
            </div>
        </section>
    )
}