'use client'
import Image from "next/image";
import {useDispatch} from "react-redux";
import {handleOpenModal} from "@/redux/features/headerSearchSlice";
import {usePathname} from "next/navigation";

export const SearchBox = () => {
    const pathName = usePathname();
    const isHomePage = pathName === "/";
    const isResCategory = pathName === "/restaurant";
    const isPartyPage = pathName === "/party"
    const dispatch = useDispatch();
    const handleOpenSearch = () => {dispatch(handleOpenModal())}

    return (
        <div onClick={handleOpenSearch} className={"header-searchBox w-[10.5625rem] items-center flex absolute left-0 box-border h-12 p-4 rounded-[0.625rem]"}>
            <Image src={"/icons/search.svg"} width={17} height={17} alt={"icon"} className={"opacity-[0.45] ml-2"}/>
            <p className={"text-inactive-dark text-base font-iranSans ml-2 max-[959px]:hidden"}>
                {isHomePage ? "جست‌وجو در اسنپ‌فود" : isResCategory || isPartyPage ? "جست‌وجو در رستوران" : "جست‌وجو در "}
            </p>
        </div>
    )
}