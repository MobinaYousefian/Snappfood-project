import {Address} from "@/components/header/Address";
import {Search} from "@/components/header/Search";
import {Orders} from "@/components/header/Orders";
import {SupportModal} from "@/components/footer/SupportModal";
import {DeleteCartModal} from "@/components/restaurants/leftAside/DeleteCartModal";
import {getData} from "@/lib/dataFeching";
import {FoodModal} from "@/components/restaurants/foodModals/FoodModal";

export default async function Modals () {
    const {restaurants} = await getData()

    return (
        <div>
            <Address/>
            <Search/>
            <Orders/>
            <SupportModal/>
            <DeleteCartModal/>
            <FoodModal restaurants={restaurants}/>
        </div>
    )
}