'use client'
import {CategoryNavbar, ResInfoModal, RestaurantInfo} from "@/components";
import {ResInfoModalMobile} from "@/components/restaurants/rightAside/mobileResInfoModal/ResInfoModalMobile";
import {useEffect, useRef} from "react";

export const RightAside = async ({params, restaurants}) => {
    const pageId = params.restaurantId[0];
    const resInfo = restaurants.filter(({id}) => id === (+pageId))[0]
    const deviceWidth = useRef(window.innerWidth);

    useEffect( () => {
        deviceWidth.current = window.innerWidth
    }, [])


    return (
        <>
            <aside className={"basis-full max-w-full p-[calc(1rem)] ResInfo-Restaurant"}>
                <div className={"ease-in-out duration-[350ms] transition sticky top-[5.5rem]"}>
                    <RestaurantInfo resInfo={resInfo}/>
                    <CategoryNavbar resInfo={resInfo}/>
                </div>
            </aside>
            {
                deviceWidth.current > 720 ?
                    <ResInfoModal resInfo={resInfo}/>
                    :
                    <ResInfoModalMobile resInfo={resInfo}/>
            }
        </>
    )
}