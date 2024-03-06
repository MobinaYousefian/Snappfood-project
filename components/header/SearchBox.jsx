'use client'
import Image from "next/image";
import {useDispatch} from "react-redux";
import {handleOpenModal} from "@/redux/features/headerSearchSlice";

export const SearchBox = () => {
    const dispatch = useDispatch();
    const handleOpenSearch = () => {dispatch(handleOpenModal())}

    return (
        <div onClick={handleOpenSearch} className={"header-searchBox w-[10.5625rem] items-center flex absolute left-0 box-border h-12 p-4 rounded-[0.625rem]"}>
            <Image src={"/icons/search.svg"} width={17} height={17} alt={"icon"} className={"opacity-[0.45] ml-2"}/>
            <p className={"text-inactive-dark text-base font-iranSans ml-2 max-[959px]:hidden"}>جست{"\u200c"}وجو در اسنپ{"\u200c"}فود</p>
        </div>
    )
}