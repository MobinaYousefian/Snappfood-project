'use client'
import {useDispatch, useSelector} from "react-redux";
import {setSortValue} from "@/redux/features/sortingSlice";
import clsx from "clsx";

const sortVal = ["بالاترین امتیاز", "نزدیک‌ترین", "جدیدترین", "ارزان‌ترین", "عملکرد کلی", "گران‌ترین"]
export const SortingModal = () => {
    const dispatch = useDispatch();
    const {sortValue} = useSelector( state => state.sorting);

    return (
        <div className={"w-[200px] h-[248px] my-[8px] rounded-[6px] outline-[rgb(204,204,204)] border-[1px] shadow-sp-small z-[1000]"}>
            <div className={"flex flex-col justify-center bg-surface-light py-[2px]"}>
                {
                    sortVal.map( (item, i) => (
                        <div onClick={() => dispatch(setSortValue(item))} key={i} className={clsx(sortValue === item ? "bg-blue-500 hover:bg-blue-500 text-surface-main" : "hover:bg-blue-100 text-surface-overlay bg-surface-light" ,"py-[8px] px-[14px] cursor-default font-iranSans")}>
                            {item}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}