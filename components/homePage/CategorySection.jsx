import Link from "next/link";
import Image from "next/image";

export const CategorySection = ({categories}) => {

    return (
        <div className={"max-[599px]:pt-4 mb-16 mx-4 padding-size flex flex-col"}>
            <p className={"mb-8 font-iRANSansBold text-base text-carbon-light"}>دسته بندی ها</p>
            <div className={"mb-8 box-border flex flex-wrap w-[calc(100% + 2rem)] m-[calc(-1rem)]"}>
                {categories.map( (item) => (
                    <div key={item.id} className={"category-mainPage p-[calc(1rem)] box-border basis-1/2 max-w-[50%]"}>
                        <Link href={`/restaurant?category=${item.id}&${item.parent ? `parent=${item.parent}` : `main=${item.mainMenu}`}`}>
                            <div className={"h-[6.438rem] hover:shadow-sp-medium flex transition-categoryHomePage shadow-sp-high rounded-xl border-[1px] border-surface-light border-solid bg-surface-light p-[0.1875rem] relative"}>
                                <Image src={item.banner} width={382} height={192} alt={item.name} className={"w-full h-full object-cover rounded-xl"}/>
                                <div className={"parent rounded-tl-xl rounded-br-xl items-center flex transition-categoryHomePage bg-surface-light absolute right-0 bottom-0 py-1 pr-4 pl-[0.8125rem]"}>
                                    <p className={"text-carbon-main text-base font-iranSans ml-[0.8125rem]"}>{item.name}</p>
                                    <Image src={"/icons/arrow-left-pink.svg"} width={6.58} height={11.17} alt={"arrow-left-pink"} className={"child transition-categoryHomePage translate-x-0"}/>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}