import {Address} from "@/components/header/Address";
import {Search} from "@/components/header/search/Search";
import {Orders} from "@/components/header/Orders";
import {SupportModal} from "@/components/footer/SupportModal";
import {DeleteCartModal} from "@/components/restaurants/leftAside/DeleteCartModal";
import {getData} from "@/lib/dataFeching";
import {FoodModal} from "@/components/restaurants/foodModals/FoodModal";

export default async function Modals () {
    const {restaurants, resPageCategory} = await getData()

    return (
        <div>
            <Address/>
            <Search restaurants={restaurants} resPageCategory={resPageCategory}/>
            <Orders/>
            <SupportModal/>
            <DeleteCartModal/>
            <FoodModal restaurants={restaurants}/>
        </div>
    )
}