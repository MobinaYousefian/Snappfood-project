import {getData} from "@/lib/dataFeching";
import {AsideMenu, BreadCrumbs, Footer, PageSorting, RestaurantList} from "@/components";
import {Suspense} from "react";
import Loading from "@/app/loading";

export default async function restaurant () {
    const {resPageCategory, restaurants} = await getData();

    return (
        <>
            <BreadCrumbs category={resPageCategory} restaurants={restaurants}/>
            <main className={"p-6 grow w-full max-w-[85.375rem] mx-auto"}>
                <Suspense fallback={<Loading/>}>
                    <PageSorting/>
                    <div className={"flex-wrap w-[calc(100%+2rem)] m-[calc(-1rem)] flex"}>
                        <AsideMenu category={resPageCategory}/>
                        <RestaurantList restaurants={restaurants}/>
                    </div>
                </Suspense>
            </main>
            <Footer/>
        </>
    )
}