import {Address} from "@/components/header/Address";
import {Search} from "@/components/header/search/Search";
import {Orders} from "@/components/header/orders/Orders";
import {SupportModal} from "@/components/footer/SupportModal";
import {DeleteCartModal} from "@/components/restaurants/leftAside/DeleteCartModal";
import {getData} from "@/lib/dataFeching";
import {FoodModal} from "@/components/restaurants/foodModals/FoodModal";
import {ExtraServiceOnFood} from "@/components/restaurants/leftAside/extraService/ExtraServiceOnFood";
import {OrdersBillModal} from "@/components/header/orders/OrdersBillModal";

export default async function Modals () {
    const {user, restaurants, resPageCategory} = await getData()

    return (
        <div>
            <Address/>
            <Search restaurants={restaurants} resPageCategory={resPageCategory}/>
            <Orders user={user}/>
            <OrdersBillModal pastOrders={user.pastOrders}/>
            <SupportModal/>
            <DeleteCartModal/>
            <FoodModal restaurants={restaurants}/>
            <ExtraServiceOnFood/>
        </div>
    )
}