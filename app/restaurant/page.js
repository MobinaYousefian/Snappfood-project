import {getData} from "@/lib/dataFeching";
import {AsideMenu, PageSorting, RestaurantList} from "@/components";
import {Suspense} from "react";

export default async function restaurant () {
        const {resPageCategory, fastFoods, irani, kebab, } = await getData();

    return (
        <main className={"p-6 grow w-full max-w-[85.375rem] mx-auto"}>
            <PageSorting/>
            <div className={"flex-wrap w-[calc(100%+2rem)] m-[calc(-1rem)] flex"}>
                <AsideMenu category={resPageCategory} fastFoods={fastFoods} irani={irani} kebab={kebab}/>
                <Suspense>
                    <RestaurantList/>
                </Suspense>
            </div>
        </main>
    )
}