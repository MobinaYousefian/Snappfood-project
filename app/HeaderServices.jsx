import {getData } from "@/lib/dataFeching";
import Image from "next/image";

export const HeaderServices = async () => {

    const data = await getData()
    const storeCategories = data.storeCategories;

    return (
        <nav className={"flex flex-nowrap py-4 overflow-x-auto"}>
            {storeCategories.map( (item) => (
                <div className={"grow"}>
                    <div className={"flex flex-col items-center justify-center pb-4 min-w-20"}>
                        <Image className={"mb-4"} width={40} height={40} src={item.icon} alt={item.name}/>
                        <span className={"font-iranSans text-xs text-carbon-main"}>{item.name}</span>
                    </div>
                </div>
            ))}
        </nav>
    )
}