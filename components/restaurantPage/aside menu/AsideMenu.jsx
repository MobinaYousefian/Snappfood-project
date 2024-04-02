import {FoodFilter, PriceFilter, ResFilter} from "@/components";

export const AsideMenu = ({category}) => {
    return (
        <aside className={"aside-resPage basis-full max-w-full p-[calc(1rem)]"}>
            <div className={"ease-in-out duration-[350ms] transition-[top] sticky top-[5.5rem]"}>
                <nav className={"flex flex-col min-h-[9.375rem]"}>
                    <FoodFilter category={category}/>
                    <PriceFilter/>
                    <ResFilter/>
                </nav>
            </div>
        </aside>
    )
}