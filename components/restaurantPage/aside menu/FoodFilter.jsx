import Image from "next/image";

export const FoodFilter = ({category}) => {
    return (
        <div className={"flex-col flex shadow-sp-small rounded-xl mb-2 p-4 border-carbon-alphaLight border-[1px]"}>
            <div className={"flex flex-col"}>
                <div className={"items-center justify-between flex cursor-pointer transition-categoryHomePage rounded-lg bg-carbon-alphaLight text-right h-12 p-[0.1875rem]"}>
                    <div className={"items-center ml-2.5 flex"}>
                        <p className={"mr-3 font-iRANSansBold text-sm text-carbon-main"}>
                            همه دسته‌بندی‌ها
                        </p>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col"}>
                {
                    category.map( (item) => (
                        <div key={item.id} className={"group flex flex-col my-[4px]"}>
                            <div className={"items-center justify-between flex cursor-pointer transition-categoryHomePage rounded-lg text-right h-12 p-[0.1875rem]"}>
                                <div className={"flex items-center"}>
                                    <Image src={item.banner} width={382} height={191} alt={item.name} className={"w-8 h-8"}/>
                                    <p className={"mr-3 font-iranSans text-sm text-carbon-main"}>
                                        {item.name}
                                    </p>
                                </div>
                                {
                                    item.id === 1 ||
                                    item.id === 2 ||
                                    item.id === 3 ?
                                    <svg viewBox={"0 0 9 16"} className={"group-hover:fill-inactive-dark fill-inactive-light w-[11px] h-[12px] ml-2.5 transition-categoryHomePage"}>
                                        <path d={"M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"}/>
                                    </svg> : null
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}