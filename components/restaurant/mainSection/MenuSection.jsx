import {FoodSection} from "@/components";

export const MenuSection = ({item, resInfo}) => {
    const sectionFood = resInfo.foods.filter(({category}) => category === item);

    return (
        <section className={"scroll-mt-[4.375rem]"}>
            <p className={"h-12 mt-8 text-carbon-light flex justify-center items-center font-iRANSansBold text-xs"}>
                {item}
            </p>
            <div className={"flex-wrap flex m-[calc(0rem)] w-[calc(100%+0rem)] border-surface-dark border-t-[0.0625rem]"}>
                {
                    sectionFood.map((food) => (
                        <FoodSection key={food.id} food={food} resName={resInfo.name}/>
                    ))
                }
            </div>
        </section>
    )
}