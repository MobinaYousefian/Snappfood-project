import {getData} from "@/lib/dataFeching";
import {AsideMenu, PageSorting} from "@/components";

export default async function restaurant () {
        const { restaurants, resPageCategory, fastFoods, irani, kebab, } = await getData();

    return (
        <main className={"p-6 grow w-full max-w-[85.375rem] mx-auto"}>
            <PageSorting/>
            <div className={"flex-wrap w-[calc(100%+2rem)] m-[calc(-1rem)] flex"}>
                <AsideMenu category={resPageCategory} fastFoods={fastFoods} irani={irani} kebab={kebab}/>
            </div>
        </main>
    )
}