'use client'
import Image from "next/image";
import {priceFormatting, toFarsiNumber} from "@/utils/numberConverter";
import {deleteExtrasSelected, setExtrasSelected} from "@/redux/features/ExtraServiceSlice";
import {useDispatch} from "react-redux";

export const ExtraItem = ({extrasSelected, extra}) => {
    const dispatch = useDispatch();

    const handleAddExtras = (e) => {
        e.preventDefault();
        if (extrasSelected.includes(extra)) {
            dispatch(deleteExtrasSelected(extra.id));
        } else {
            dispatch(setExtrasSelected(extra));
        }
    }

    return (
        <section className={"last:border-none border-b-[0.0625rem] border-carbon-alphaLight"}>
            <label onClick={handleAddExtras} htmlFor={"extraInput"} className={"w-full inline-flex items-center select-none cursor-pointer"}>
                <input type={"checkbox"} className={"hidden"} id={"extraInput"}/>
                {
                    extrasSelected.includes(extra) ?
                        <Image src={"/icons/checkBox.svg"} width={22} height={22} alt={"icon"} className={"h-[1.375rem] w-[1.375rem]"}/>
                        :
                        <Image src={"/icons/checkBox-empty.svg"} width={22} height={22} alt={"icon"} className={"h-[1.375rem] w-[1.375rem]"}/>
                }
                <div className={"py-4 mr-2 flex justify-between items-center w-[calc(100%-1rem)]"}>
                    <div className={"flex flex-col"}>
                        <p className={"font-iranSans text-sm text-carbon-main"}>{extra.name}</p>
                    </div>
                    <span className={"flex items-center font-iRANSansBold text-sm text-carbon-main"}>
                        {toFarsiNumber(priceFormatting(extra.price))}
                        <span className={"text-carbon-light font-iranSans text-xs mr-1"}>  تومان</span>
                    </span>
                </div>
            </label>
        </section>
    )
}