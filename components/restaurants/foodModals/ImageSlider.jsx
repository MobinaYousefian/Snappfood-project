'use client'
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";
import clsx from "clsx";
import {setImageUrl} from "@/redux/features/foodDataSlice";

export const ImageSlider = () => {
    const {imageUrl, foodData} = useSelector(state => state.foodData);
    const dispatch = useDispatch();

    const handleChangeImage = (e, item) => {
        e.preventDefault();
        dispatch(setImageUrl(item));
    }

    return (
        <div className={"max-w-[17.5rem]"}>
            <Image src={imageUrl} width={641} height={641} alt={"icons"} className={"rounded-lg w-[280px] h-[280px]"}/>
            <div className={"flex flex-wrap"}>
                {
                    foodData.photos.map((item, i) => (
                        <div onClick={(e) => handleChangeImage(e, item)} className={"cursor-pointer ml-2 mt-1.5"} key={i}>
                            <Image src={item} width={641} height={641} alt={"icons"} className={clsx(item === imageUrl ? "opacity-100" : "opacity-70" ,"rounded-lg w-[40px] h-[40px]")}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}