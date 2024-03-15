import {RestaurantInfo} from "@/components";
import {getData} from "@/lib/dataFeching";

export default async function RestaurantId ({params}) {
    const pageId = params.restaurantId[1];
    console.log(pageId)
    const {restaurants, restaurantsFoods} = await getData();

    return (
        <main className={"mx-auto max-w-[85.375rem] w-full grow p-4 pt-[4.25rem]"}>
            <div className={"m-[calc(-1rem)] flex-wrap flex w-[calc(100%+2rem)]"}>
                <RestaurantInfo restaurants={restaurants}/>
            </div>
        </main>
    )
}
