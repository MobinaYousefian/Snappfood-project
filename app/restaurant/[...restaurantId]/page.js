import {FoodMenu, RightAside} from "@/components";
import {getData} from "@/lib/dataFeching";
import {Suspense} from "react";

export async function generateMetadata ({ params }) {
    const pageId = params.restaurantId[0];
    const {restaurants} = await getData();
    const resInfo = restaurants.filter(({id}) => id == pageId)[0]
    return {
        title : `${resInfo.name}-سفارش آنلاین غذا از ${resInfo.name} | اسنپ فود`
    }
}

export default async function RestaurantId ({params}) {
    const {restaurants} = await getData();

    return (
        <div className={"bg-surface-main"}>
            <main className={"mx-auto max-w-[85.375rem] w-full grow p-4 pt-[4.25rem]"}>
                <div className={"m-[calc(-1rem)] flex-wrap flex w-[calc(100%+2rem)]"}>
                    <Suspense>
                        <RightAside params={params} restaurants={restaurants}/>
                        <FoodMenu params={params} restaurants={restaurants}/>
                    </Suspense>
                </div>
            </main>
        </div>
    )
}
