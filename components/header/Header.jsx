'use client'
import {AddressBox, HeaderServices, SearchBox, UserAccount, UserOrders} from "@/components";
import {usePathname} from "next/navigation";
import clsx from "clsx";

export const Header = ({user, storeCategories}) => {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const isResCategory = pathname === "/restaurant";

    return (
        <>
            <div className={"sticky top-0 right-0 left-0 translate-y-0 w-full flex flex-col z-[999]"}>
                <header className={clsx(isResCategory ? "shadow-sp-small" : isHomePage ? 'shadow-none' : '' ,"flex flex-col")}>
                    <div className={"w-full bg-surface-light relative justify-between items-center flex box-border p-4 h-[4.5rem] w-full header-animation"}>
                        <AddressBox/>
                        <SearchBox/>
                        <div className={"items-center flex z-[999]"}>
                            <UserAccount user={user}/>
                            <UserOrders user={user}/>
                        </div>
                    </div>
                </header>
                { isHomePage && <HeaderServices storeCategories={storeCategories}/>}
            </div>
            {isResCategory && <HeaderServices storeCategories={storeCategories}/>}
        </>

    )
}