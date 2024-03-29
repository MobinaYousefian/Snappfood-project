import {FoodMenu, RightAside} from "@/components";
import {getData} from "@/lib/dataFeching";

export async function generateMetadata ({ params }) {
    const pageId = params.restaurantId[0];
    const {restaurants} = await getData();
    const resInfo = restaurants.filter(({id}) => id == pageId)[0]
    return {
        title : `${resInfo.name}-سفارش آنلاین غذا از ${resInfo.name} | اسنپ فود`
    }
}

export default function RestaurantId ({params}) {

    return (
        <div className={"bg-surface-main"}>
            <main className={"mx-auto max-w-[85.375rem] w-full grow p-4 pt-[4.25rem]"}>
                <div className={"m-[calc(-1rem)] flex-wrap flex w-[calc(100%+2rem)]"}>
                    <RightAside params={params}/>
                    <FoodMenu params={params}/>
                </div>
            </main>
        </div>
    )
}
