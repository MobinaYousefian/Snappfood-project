import {Address} from "@/components/header/Address";
import {Search} from "@/components/header/Search";
import {Orders} from "@/components/header/Orders";
import {SupportModal} from "@/components/footer/SupportModal";

function Modals () {
    return (
        <div>
            <Address/>
            <Search/>
            <Orders/>
            <SupportModal/>
        </div>
    )
}

export default Modals;