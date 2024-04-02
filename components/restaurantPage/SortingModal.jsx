'use client'
import {useDispatch, useSelector} from "react-redux";
import {setSortValue} from "@/redux/features/sortingSlice";
import clsx from "clsx";
import {useRouter, useSearchParams} from "next/navigation";

const sortVal = ["بالاترین امتیاز", "نزدیک‌ترین", "جدیدترین", "ارزان‌ترین", "عملکرد کلی", "گران‌ترین"]
export const SortingModal = () => {
    const dispatch = useDispatch();
    const {sortValue} = useSelector( state => state.sorting);

    const router = useRouter();
    const searchParams = useSearchParams();
    const parentId = searchParams.get("parent");
    const mainMenu = searchParams.get("main");

    const handleUrlAndSort = (item, i) => {
        dispatch(setSortValue(item));
        if (parentId != null) {
            router.push(`/restaurant?parent=${parentId}&sort=${i}`)
        } else if (mainMenu != null) {
            router.push(`/restaurant?main=${mainMenu}&sort=${i}`)
        } else {
            router.push(`/restaurant?sort=${i}`)
        }
    }

    return (
        <div className={"w-0 h-0 relative"}>
            <div className={"z-[9999] absolute top-0 transition-socialFooter w-[200px] h-[248px] my-[8px] rounded-[6px] outline-[rgb(204,204,204)] border-[1px] shadow-sp-high"}>
                <div className={"flex flex-col justify-center bg-surface-light py-[2px]"}>
                    {
                        sortVal.map( (item, i) => (
                            <div key={i} onClick={() => handleUrlAndSort(item, i)} className={clsx(sortValue === item ? "bg-blue-500 hover:bg-blue-500 text-surface-main" : "hover:bg-blue-100 text-surface-overlay bg-surface-light" ,"py-[8px] px-[14px] cursor-default font-iranSans")}>
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}