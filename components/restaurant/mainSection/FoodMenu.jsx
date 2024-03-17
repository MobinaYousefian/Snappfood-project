import {DiscountSection, MenuSection} from "@/components";
import {PopularSection} from "@/components/restaurant/mainSection/PopularSection";

export const FoodMenu = ({resInfo}) => {
    return (
        <section className={"FoodMenu basis-full max-w-full p-[calc(1rem)]"}>
            <section className={"border-surface-dark bg-surface-light rounded-lg border-[0.0625rem]"}>
                <PopularSection resInfo={resInfo}/>
                {
                    resInfo.discount && <DiscountSection resInfo={resInfo}/>
                }
                {
                    resInfo.foodList.map((item, i) => (
                        <MenuSection key={i} item={item} resInfo={resInfo}/>
                    ))
                }
            </section>
        </section>
    )
}