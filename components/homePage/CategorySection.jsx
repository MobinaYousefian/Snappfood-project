import Link from "next/link";
import Image from "next/image";

export const CategorySection = ({categories}) => {

    return (
        <div className={"mb-16 pt-4 mx-4 padding-size flex flex-col"}>
            <p className={"mb-8 font-iRANSansBold text-base text-carbon-light"}>دسته بندی ها</p>
            <div className={"mb-8 box-border flex flex-wrap w-[calc(100% + 2rem)] m-[calc(-1rem)]"}>
                {categories.map( ({ id, name, banner}) => (
                    <div key={id} className={"category-mainPage p-[calc(1rem)] box-border basis-1/2 max-w-[50%]"}>
                        <Link href={"/"}>
                            <div className={"hover:shadow-sp-medium flex transition-categoryHomePage shadow-sp-high rounded-xl border-[1px] border-surface-light border-solid bg-surface-light p-[0.1875rem] relative h-[5.9375rem]"}>
                                <Image src={banner} width={382} height={192} alt={name} className={"w-full h-full object-cover rounded-xl"}/>
                                <div className={"parent rounded-tl-xl rounded-br-xl items-center flex transition-categoryHomePage bg-surface-light absolute right-0 bottom-0 py-1 pr-4 pl-[0.8125rem]"}>
                                    <p className={"text-carbon-main text-base font-iranSans ml-[0.8125rem]"}>{name}</p>
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