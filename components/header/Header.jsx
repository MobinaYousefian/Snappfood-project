'use client'
import {HeaderServices, SearchBox, UserAccount} from "@/components";
import {AddressBox} from "@/components/header/AddressBox";
import ReduxProvider from "@/redux/ReduxProvider";


export const Header = ({storeCategories, user}) => {

    return (
            <header className={"w-full z-50 bg-surface-light shadow-sp-small sticky top-0 right-0 left-0"}>
                <div className={"justify-between items-center flex box-border p-4 h-[4.5rem] w-full bg-surface-light relative header-animation"}>
                    <ReduxProvider>
                        <AddressBox/>
                        <SearchBox/>
                        <div className={"items-center flex z-[999]"}>
                        <UserAccount user={user}/>
                        </div>
                    </ReduxProvider>
                </div>
                <HeaderServices storeCategories={storeCategories}/>
            </header>
    )
}