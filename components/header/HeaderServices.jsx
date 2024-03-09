'use client'
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import {usePathname} from "next/navigation";

export const HeaderServices = ({storeCategories}) => {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const isResCategory = pathname === "/restaurant";
    console.log(pathname)

    return (
        <nav className={clsx(isHomePage ? "shadow-sp-small" : isResCategory ? 'shadow-none' : '' ,"w-full bg-surface-light flex flex-nowrap pt-4 overflow-x-auto")}>
            {storeCategories.map( (item) => (
                <div className={"grow"} key={item.id}>
                    <Link href={item.url}>
                        <div className={"flex flex-col items-center justify-center pb-4 min-w-[5.5rem]"}>
                            <Image className={"mb-4"} width={40} height={40} src={item.icon} alt={item.name}/>
                            <span className={"font-iranSans text-xs text-carbon-light"}>{item.name}</span>
                        </div>
                    </Link>
                </div>
            ))}
        </nav>
    )
}