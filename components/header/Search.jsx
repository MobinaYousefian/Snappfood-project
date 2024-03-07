'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";
import {handleCloseModal} from "@/redux/features/headerSearchSlice";

export const Search = () => {
    const dispatch = useDispatch();
    const {isOpen} = useSelector((state => state.searchModal));
    const searchRef = useRef(null);

    const handleCloseSearch = (e) => {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
            dispatch(handleCloseModal());
        }
    }

    if (!isOpen) return null;
    return (
        <div onClick={handleCloseSearch} className={"z-[10000] inset-0 fixed modal-card-animation flex justify-center items-center"}>
            <div ref={searchRef} className={"search-modal-card-animation overflow-hidden max-h-[90vh] py-3 m-auto min-w-[18.75rem] fixed top-0 flex justify-center w-[31vw]"}>
                <div className={"flex-col flex w-[95%]"}>
                    <div className={"relative w-full"}>
                        <Image src={"/icons/search.svg" || "/icons/clear-input.svg"} width={17} height={17} alt={"icon"} className={"absolute top-0 right-4 bottom-0 m-auto cursor-pointer"}/>
                        <input className={"focus:border-carbon-dark focus:outline-none text-base font-iranSans rounded-[0.625rem] border-carbon-alphaLight w-full h-12 py-3 pl-3 pr-10   text-carbon-main border-[0.0625rem]"}/>
                    </div>
                    <div className={"mt-1 overflow-auto bg-surface-light rounded-md flex flex-col"}>
                        <div className={"items-center justify-between flex cursor-pointer p-[1.125rem]"}>
                            <span className={"font-iranSans text-sm text-carbon-light"}>
                                {"عبارت مورد نظر خود را وارد کنید." || "جستجوی "}
                                <p className={"font-iRANSansBold text-carbon-main"}></p>
                            </span>
                            {/*<Image src={"/icons/search-result.svg"} width={12} height={12} alt={"icon"}/>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}