'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {
    clearSearchTerm,
    handleCloseModal,
    setResPageSearchResult,
    setSearchHistory,
} from "@/redux/features/headerSearchSlice";
import {useRouter} from "next/navigation";

export const SearchInput = ({inputRef, whichResPage, searchFoodInRes, handleOnChange, idParam, nameParam}) => {
    const {searchTerm} = useSelector(state => state.searchModal);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleClearSearchTerm = () => {
        dispatch(clearSearchTerm());
        inputRef.current.focus();
        if (whichResPage) {
            router.push(`/restaurant/${idParam}/${nameParam}`);
            dispatch(handleCloseModal());
        }
    }


    const handleSearchKeyUp = (e) => {
        if (e.key === "Enter") {
            dispatch(setSearchHistory(searchTerm));
            dispatch(handleCloseModal());
            if (whichResPage) {
                dispatch(setResPageSearchResult(searchFoodInRes))
                router.push(`/restaurant/${idParam}/${nameParam}?query=${searchTerm}`);
            }
        }
    }

    return (
        <div className={"relative w-full"}>
            {
                !searchTerm ?
                    <Image src={"/icons/search.svg"} width={17} height={17} alt={"icon"} className={"absolute top-0 right-4 bottom-0 m-auto cursor-pointer"}/>
                    :
                    <Image onClick={handleClearSearchTerm} src={"/icons/clear-input.svg"} width={17} height={17} alt={"icon"} className={"absolute top-0 right-4 bottom-0 m-auto cursor-pointer"}/>


            }
            <input onKeyUp={handleSearchKeyUp} onChange={handleOnChange} value={searchTerm} ref={inputRef} className={"focus:border-carbon-dark focus:outline-none text-base font-iranSans rounded-[0.625rem] border-carbon-alphaLight w-full h-12 py-3 pl-3 pr-10   text-carbon-main border-[0.0625rem]"}/>
        </div>
    )
}