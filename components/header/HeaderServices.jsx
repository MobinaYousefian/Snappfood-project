import {getData } from "@/lib/dataFeching";
import Image from "next/image";

export const HeaderServices = async () => {

    const { storeCategories } = await getData()

    return (
        <nav className={"flex flex-nowrap pt-4 overflow-x-auto"}>
            {storeCategories.map( (item) => (
                <div className={"grow"} key={item.id}>
                    <div className={"flex flex-col items-center justify-center pb-4 min-w-[5.5rem]"}>
                        <Image className={"mb-4"} width={40} height={40} src={item.icon} alt={item.name}/>
                        <span className={"font-iranSans text-xs text-carbon-light"}>{item.name}</span>
                    </div>
                </div>
            ))}
        </nav>
    )
}