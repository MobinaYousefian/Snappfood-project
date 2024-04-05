'use client'
import Image from "next/image";
import {useDispatch} from "react-redux";
import {deleteSearchHistory, handleCloseModal, setSearchTerm} from "@/redux/features/headerSearchSlice";

export const SearchHistory = ({searchHistory}) => {
    const dispatch = useDispatch();

    const handleDeleteSearchHistory = (i, e) => {
        e.stopPropagation()
        dispatch(deleteSearchHistory(i))
    }

    const handleSearchByHistory = (item) => {
        dispatch(setSearchTerm(item));
        dispatch(handleCloseModal());
    }

    return (
        <>
            {
                searchHistory.map((item, i) => (
                    <div onClick={() => handleSearchByHistory(item)} className={"items-center justify-between flex cursor-pointer pr-5 pl-[1.125rem] py-3.5"} key={i}>
                        <div className={"flex"}>
                            <Image src={"/icons/search-history.svg"} width={17} height={18} alt={"icon"} className={"ml-[1.125rem]"}/>
                            <p className={"font-iranSans text-sm text-carbon-main"}>{item}</p>
                        </div>
                        <button onClick={(e) => handleDeleteSearchHistory(i, e)} className={"hover:bg-accent-alphaLight rounded-full flex items-center justify-center transition-socialFooter w-8 h-8 py-[1px] px-[6px]"}>
                            <Image src={"/icons/close.svg"} width={12} height={14} alt={"icon"}/>
                        </button>
                    </div>
                ))
            }
        </>
    )

}