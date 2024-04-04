import {Address} from "@/components/header/Address";
import {Search} from "@/components/header/Search";
import {Orders} from "@/components/header/Orders";
import {SupportModal} from "@/components/footer/SupportModal";
import {DeleteCartModal} from "@/components/restaurant/leftAside/DeleteCartModal";

function Modals () {
    return (
        <div>
            <Address/>
            <Search/>
            <Orders/>
            <SupportModal/>
            <DeleteCartModal/>
        </div>
    )
}

export default Modals;