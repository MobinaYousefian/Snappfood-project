'use client'
import Image from "next/image";
import clsx from "clsx";
import {useRouter, useSearchParams} from "next/navigation";

export const FoodFilter = ({category}) => {
    const router = useRouter();

    const handleGoBack = () => {
        const urlSearchParams = new URLSearchParams(searchParams);
        urlSearchParams.delete("category");
        urlSearchParams.delete("parent");
        urlSearchParams.delete("main");
        router.push(`/restaurant?${urlSearchParams}`)
    }

    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");
    const parentParam = searchParams.get("parent");

    const handleUrl = (categoryId, parentCategory, mainMenu) => {
        if (typeof parentCategory !== "undefined") {
            if (searchParams.size > 0 || searchParams.has("category")) {
                const urlSearchParams = new URLSearchParams(searchParams);
                urlSearchParams.delete("category");
                urlSearchParams.delete("parent");
                urlSearchParams.append("category", `${categoryId}`);
                urlSearchParams.append("parent", `${parentCategory}`);
                router.push(`/restaurant?${urlSearchParams}`)
            }else {
                router.push(`/restaurant?category=${categoryId}&parent=${parentCategory}`)
            }
        } else if (typeof mainMenu !== "undefined") {
            if (searchParams.size > 0 || searchParams.has("category")) {
                const urlSearchParams = new URLSearchParams(searchParams);
                urlSearchParams.delete("category");
                urlSearchParams.delete("main");
                urlSearchParams.append("category", `${categoryId}`);
                urlSearchParams.append("main", `${mainMenu}`);
                router.push(`/restaurant?${urlSearchParams}`)
            }else {
                router.push(`/restaurant?category=${categoryId}&main=${mainMenu}`)
            }
        }else {
            handleGoBack()
        }
    }

    const iraniMenu = category.filter(({parent}) => parent === 1);
    const fastFoodMenu = category.filter(({parent}) => parent === 8);
    const kebabMenu = category.filter(({parent}) => parent === 2);


    const isIraniParam = iraniMenu.filter(({id}) => (+categoryParam) === id).length > 0 ;
    const isFastFoodParam = fastFoodMenu.filter(({id}) => (+categoryParam) === id).length > 0 ;
    const isKebabParam = kebabMenu.filter(({id}) => (+categoryParam) === id).length > 0 ;

    let parentCategory;
    let categoryId;

    if (parentParam === "ایرانی" || isIraniParam) {
        category = iraniMenu;
        parentCategory = "ایرانی";
        categoryId = 1
    }

    if (parentParam === "فست\u200Cفود" || isFastFoodParam) {
        category = fastFoodMenu;
        parentCategory = "فست\u200Cفود";
        categoryId = 8
    }

    if (parentParam === "کباب" || isKebabParam) {
        category = kebabMenu;
        parentCategory = "کباب";
        categoryId = 2
    }

    if (!parentParam) {
        category = category.filter(({mainMenu}) => mainMenu === true);
    }


    return (
        <div className={"flex-col flex shadow-sp-small rounded-xl mb-2 p-4 border-carbon-alphaLight border-[1px]"}>
            <div className={"parentDiv flex flex-col"}>
                <div className={clsx( categoryParam ? "bg-transparent font-iranSans" : "bg-carbon-alphaLight font-iRANSansBold" ,"items-center justify-between flex cursor-pointer transition-categoryHomePage rounded-lg text-right h-12 p-[0.1875rem]")}>
                    {
                        parentParam ?
                            <div className={"flex justify-center items-center"} onClick={handleGoBack}>
                                <Image src={"/icons/backFoodFilter-menu.svg"} width={11} height={12} alt={"icon"} className={"childImg mr-[17px] ml-[5px] h-[12px] w-[11px]"}/>
                                <div className={"items-center ml-2.5 flex"}>
                                    <p className={"childP mr-3 font-iranSans text-sm text-carbon-main"}>
                                        بازگشت
                                    </p>
                                </div>
                            </div>
                            :
                            <div onClick={() => handleUrl()} className={"items-center ml-2.5 flex"}>
                                <p className={"mr-3 text-sm text-carbon-main"}>
                                    همه دسته‌بندی‌ها
                                </p>
                            </div>
                    }
                </div>
            </div>
            <div className={"flex flex-col"}>
                {
                    parentCategory ?
                        <div onClick={() => handleUrl(categoryId, parentCategory)} className={clsx( parentParam === parentCategory ? "bg-carbon-alphaLight font-iRANSansBold" : "bg-transparent font-iranSans" ,"items-center justify-between flex cursor-pointer transition-categoryHomePage rounded-lg text-right h-12 p-[0.1875rem]")}>
                            <div className={"items-center flex ml-2.5"}>
                                <p className={"mr-3 text-carbon-main text-sm"}>{`همه ${parentCategory} ها`}</p>
                            </div>
                        </div>
                        : null
                }
                {
                    category.map((menu) => (
                        <div key={menu.id} onClick={() => handleUrl(menu.id, menu.parent, menu.mainMenu)} className={"group flex flex-col my-[4px]"}>
                            <div className={clsx( categoryParam === `${menu.id}` ? "bg-carbon-alphaLight font-iRANSansBold" : "bg-transparent font-iranSans", parentCategory ? "mr-4" : "" ,"items-center justify-between flex cursor-pointer transition-categoryHomePage rounded-lg text-right h-12 p-[0.1875rem]")}>
                                <div className={"flex items-center"}>
                                    <Image src={menu.banner} width={382} height={191} alt={menu.name} className={"w-8 h-8"}/>
                                    <p className={"mr-3 text-sm text-carbon-main"}>
                                        {menu.name}
                                    </p>
                                </div>
                                {
                                    !parentParam && (menu.id === 1 || menu.id === 2 || menu.id === 8) ?
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