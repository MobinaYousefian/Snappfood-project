import {CategoryNavbar, ResInfoModal, RestaurantInfo} from "@/components";

export const RightAside = async ({params, restaurants}) => {
    const pageId = params.restaurantId[0];
    const resInfo = restaurants.filter(({id}) => id == pageId)[0]

    return (
        <>
            <aside className={"basis-full max-w-full p-[calc(1rem)] ResInfo-Restaurant"}>
                <div className={"ease-in-out duration-[350ms] transition sticky top-[5.5rem]"}>
                    <RestaurantInfo resInfo={resInfo}/>
                    <CategoryNavbar resInfo={resInfo}/>
                </div>
            </aside>
            <ResInfoModal resInfo={resInfo}/>
        </>
    )
}