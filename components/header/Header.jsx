import {HeaderServices, SearchBox, UserAccount, UserOrders} from "@/components";
import {AddressBox} from "@/components/header/AddressBox";
import {getData} from "@/lib/dataFeching";


export const Header = async () => {
    const { storeCategories, user } = await getData()

    return (
        <header className={"w-full z-50 bg-surface-light shadow-sp-small sticky top-0 right-0 left-0"}>
            <div className={"justify-between items-center flex box-border p-4 h-[4.5rem] w-full bg-surface-light relative header-animation"}>
                <AddressBox/>
                <SearchBox/>
                <div className={"items-center flex z-[999]"}>
                    <UserAccount user={user}/>
                    <UserOrders user={user}/>
                </div>
            </div>
            <HeaderServices storeCategories={storeCategories}/>
        </header>
    )
}