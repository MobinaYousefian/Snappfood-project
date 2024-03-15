import {RestaurantInfo} from "@/components";
import {getData} from "@/lib/dataFeching";

export default async function RestaurantId ({params}) {
    const {restaurants} = await getData();
    const pageId = params.restaurantId[1];
    const resInfo = restaurants.filter(({id}) => id == pageId)[0]

    return (
        <main className={"mx-auto max-w-[85.375rem] w-full grow p-4 pt-[4.25rem]"}>
            <div className={"m-[calc(-1rem)] flex-wrap flex w-[calc(100%+2rem)]"}>
                <RestaurantInfo resInfo={resInfo}/>
            </div>
        </main>
    )
}
