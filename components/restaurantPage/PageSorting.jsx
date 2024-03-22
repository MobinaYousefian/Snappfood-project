'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {SortingModal} from "@/components";
import {handleCloseSorting, handleOpenCloseSorting, setSortValue} from "@/redux/features/sortingSlice";
import {useEffect, useRef} from "react";

export const PageSorting = () => {
    const sortRef = useRef(null);
    const {sortValue, isOpen} = useSelector(state => state.sorting);
    const dispatch = useDispatch();

    const handleOpenClose = () => {
        dispatch(handleOpenCloseSorting())
    };
    const handleClearSort = () => {
        dispatch(setSortValue("به ترتیب پیش‌فرض"));
        dispatch(handleOpenCloseSorting())
    };

    useEffect(() => {

        const handleClickOutside = (e) => {
            if (sortRef.current && !sortRef.current.contains(e.target)) {
                dispatch(handleCloseSorting())
            }
        }
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    },[isOpen])

    return (
        <div className={"mb-8 flex justify-between items-center"}>
            <div></div>
            <div ref={sortRef} onClick={handleOpenClose} className={"relative text-base"}>
                <span className={"z-[999] h-[1px] w-[1px] absolute overflow-hidden whitespace-nowrap"}></span>
                <div className={"focus:outline-blue-600 items-center bg-surface-light rounded-[6px] flex flex-wrap justify-between min-h-[38px] relative w-[200px] h-[48px] border-[1px] border-carbon-alphaLight outline-0 transition-all duration-100 ease-in-out hover:border-carbon-alphaHigh"}>
                    <div className={"flex items-center flex-1 flex-wrap py-[2px] px-[8px] relative overflow-hidden"}>
                        <div className={"font-iranSans -translate-y-1/2 top-2/4 absolute text-[rgb(128,128,128)] mx-[2px]"}>
                            {sortValue}
                        </div>
                        <div className={"m-[2px] py-[2px] text-[rgb(51,51,51)]"}>
                            <div className={"inline-block"}>
                                <input className={"box-content w-[2px] outline-0"} type={"text"}/>
                                <div className={"absolute top-0 left-0 invisible h-[0] overflow-scroll whitespace-pre text-[16px] font-iranSans"}></div>
                            </div>
                        </div>
                    </div>
                    <div className={"flex items-center self-stretch shrink-0"}>
                        <div onClick={handleClearSort} className={"hover:fill-carbon-main flex p-[8px] transition-socialFooter"}>
                            {sortValue !== "به ترتیب پیش‌فرض" &&
                                <svg viewBox={"0 0 20 20"} width={20} height={20}
                                     className={"transition-all ease-in-out duration-100 hover:fill-surface-overlay inline-block fill-carbon-alphaHigh"}>
                                    <path d={"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}/>
                                </svg>
                            }
                        </div>
                        <span className={"w-[1px] my-[8px] self-stretch bg-[rgb(204,204,204)]"}></span>
                        <div className={"flex p-[8px] transition-socialFooter "}>
                            <Image src={"/icons/drop-down.svg"} width={8} height={5} alt={"icons"}/>
                        </div>
                    </div>
                </div>
                {isOpen && <SortingModal/>}
            </div>
        </div>
    )
}