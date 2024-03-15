import {CategoryNavbar, RestaurantInfo} from "@/components";

export const RightAside = ({resInfo}) => {
    return (
        <aside className={"basis-full max-w-full p-[calc(1rem)] ResInfo-Restaurant"}>
            <div className={"ease-in-out duration-[350ms] transition sticky top-[5.5rem]"}>
                <RestaurantInfo resInfo={resInfo}/>
                <CategoryNavbar resInfo={resInfo}/>
            </div>
        </aside>
    )
}