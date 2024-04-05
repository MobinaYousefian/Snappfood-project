'use client'
import {usePathname, useSearchParams} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {useSelector} from "react-redux";

export const BreadCrumbs = ({category, restaurants}) => {
    const {selected} = useSelector(state => state.addressModal);
    const currentCity = selected.city;
    const pathName = usePathname();
    const searchParams  = useSearchParams();


    let resPageId
    if (pathName.split("/").length > 2) {
        resPageId = pathName.split("/")[2];
    }

    let categoryParam  = searchParams.get("category");
    const parentParam  = searchParams.get("parent");

    const iraniCategory = category.filter((item) => item.parent === 1);
    const kebabCategory = category.filter((item) => item.parent === 2);
    const fastFoodCategory = category.filter((item) => item.parent === 8);


    if ( (+categoryParam) === 1 || iraniCategory.filter((item) => item.parent === (+parentParam)).length > 0) {
        categoryParam = 1
    }
    if ( (+categoryParam) === 2 || kebabCategory.filter((item) => item.parent === (+parentParam)).length > 0) {
        categoryParam = 2
    }
    if ( (+categoryParam) === 8 || fastFoodCategory.filter((item) => item.parent === (+parentParam)).length > 0) {
        categoryParam = 8
    }
    if ( (+categoryParam) === 17) {
        categoryParam = 17
    }
    if ( (+categoryParam) === 18) {
        categoryParam = 18
    }
    if ( (+categoryParam) === 19) {
        categoryParam = 19
    }


    const findCategory = category.filter(({id}) => id === categoryParam)[0];

    return (
        <div className={"pr-5 flex items-center pt-[1.5625rem]"}>
            <Link href={"/"} className={"justify-center flex items-center ml-2.5"}>
                <p className={"ml-1 leading-3 font-iranSans text-inactive-dark text-[0.625rem]"}>اسنپ فود</p>
                <Image src={"/icons/arrow-breadCrumbs.svg"} width={5} height={14} alt={"icons"} className={"h-4"}/>
            </Link>
            <Link href={"/restaurant"} className={"justify-center flex items-center ml-2.5"}>
                <p className={"flex items-center ml-1 leading-3 font-iranSans text-inactive-dark text-[0.625rem]"}>
                    <p className={"ml-1"}>رستوران های</p>
                    <p>{currentCity}</p>
                </p>
                {
                    (categoryParam || resPageId) &&
                    <Image src={"/icons/arrow-breadCrumbs.svg"} width={5} height={14} alt={"icons"} className={"h-4"}/>
                }
            </Link>
            {
                categoryParam &&
                    <div className={"flex"}>
                        <p className={"leading-3 font-iranSans text-carbon-light text-[0.625rem]"}>{findCategory.name}</p>
                    </div>
            }
            {
                resPageId &&
                <div className={"flex"}>
                    <p className={"leading-3 font-iranSans text-carbon-light text-[0.625rem]"}>{restaurants[resPageId - 1].name}</p>
                </div>
            }
        </div>
    )
}