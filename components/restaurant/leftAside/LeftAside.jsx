import {DeliveryInfo, StateBadge, CartBasket} from "@/components";

export const LeftAside = ({params, restaurants}) => {
    const pageId = params.restaurantId[0];
    const resInfo = restaurants.filter(({id}) => id == pageId)[0]

    return (
        <aside className={"h-auto basis-full max-w-full p-[calc(1rem)] ResDelivery-Restaurant"}>
            <div className={"h-auto sticky top-[5.5rem] ease-in-out duration-[350ms] transition"}>
                <DeliveryInfo resInfo={resInfo}/>
                <StateBadge resInfo={resInfo}/>
                <CartBasket resInfo={resInfo}/>
            </div>
        </aside>
    )
}