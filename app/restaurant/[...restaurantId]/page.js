import {FoodMenu, Footer, LeftAside, RightAside} from "@/components";
import {getData} from "@/lib/dataFeching";
import {Suspense} from "react";
import Loading from "@/app/loading";

export async function generateMetadata ({ params }) {
    const pageId = params.restaurantId[0];
    const {restaurants} = await getData();
    const resInfo = restaurants.filter(({id}) => id == pageId)[0]
    return {
        title : `${resInfo.name}-سفارش آنلاین غذا از ${resInfo.name} | اسنپ فود`
    }
}

export default async function RestaurantId ({params}) {
    const {restaurants, partyFoods} = await getData();

    return (
        <>
            <div className={"bg-surface-main"}>
                <Suspense fallback={<Loading/>}>
                    <main className={"mx-auto max-w-[85.375rem] w-full grow p-4 pt-[4.25rem]"}>
                        <div className={"m-[calc(-1rem)] flex-wrap flex w-[calc(100%+2rem)]"}>
                            <RightAside params={params} restaurants={restaurants}/>
                            <FoodMenu partyFoods={partyFoods} params={params} restaurants={restaurants}/>
                            <LeftAside params={params} restaurants={restaurants}/>
                        </div>
                    </main>
                </Suspense>
            </div>
            <Footer/>
        </>
    )
}
