import {getData} from "@/lib/dataFeching";
import {PageSorting} from "@/components";

export default async function restaurant () {
        const { restaurants, categories, fastFoods, irani, kebab, } = await getData();

    return (
        <main className={"p-6 grow w-full max-w-[85.375rem] mx-auto"}>
            <PageSorting/>
        </main>
    )
}