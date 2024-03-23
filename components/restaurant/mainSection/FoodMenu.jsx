import {CouponSection, DiscountSection, MenuSection} from "@/components";
import {PopularSection} from "@/components/restaurant/mainSection/PopularSection";
import {getData} from "@/lib/dataFeching";

export const FoodMenu = async ({params}) => {
    const {restaurants} = await getData();
    const pageId = params.restaurantId[0];
    const resInfo = restaurants.filter(({id}) => id == pageId)[0]

    return (
        <section className={"FoodMenu basis-full max-w-full p-[calc(1rem)]"}>
            <section className={"border-surface-dark bg-surface-light rounded-lg border-[0.0625rem]"}>
                {
                    resInfo.couponList && <CouponSection resInfo={resInfo}/>
                }
                <PopularSection resInfo={resInfo}/>
                {
                    resInfo.discountNumber && <DiscountSection resInfo={resInfo}/>
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