'use client'
import {selectAddress} from "@/redux/features/headerAddressSlice";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";

export function AddressPlaceholder ({item, i, handleCloseModal}) {

    const {selected} = useSelector(state => state.addressModal)
    const dispatch = useDispatch();

    const handleSelectAddress = () => {
        dispatch(selectAddress(item));
        handleCloseModal()
    }

    return (
        <div className={"last:mb-0 justify-between items-center flex border-[1px] border-carbon-alphaLight border-solid rounded-[0.375rem] pr-4 py-2.5 relative box-border w-full mb-4"}>
            <label htmlFor={`address-${i}`} className={"inline-flex items-center flex-1"}>
                <input onClick={handleSelectAddress} id={`address-${i}`} type={"checkbox"} className={"hidden box-border"}/>
                {
                    item.location === selected.location ?
                        <Image src={"/icons/checkBox.svg"} width={22} height={22} alt={"icon"}
                               className={"cursor-pointer h-[1.375rem] w-[1.375rem] rounded-[50%]"}/>
                        :
                        <Image src={"/icons/checkBox-empty.svg"} width={22} height={22} alt={"icon"}
                               className={"cursor-pointer h-[1.375rem] w-[1.375rem] rounded-[50%]"}/>
                }
                <div className={"w-[calc(100%-50px)] flex-col flex pr-[10px] cursor-pointer mr-2"}>
                    <p className={"text-carbon-main text-sm font-iRANSansBold mb-[5px]"}>{item.title}</p>
                    <div>
                        <span className={"text-carbon-light font-iranSans text-sm"}>
                            {item.location}
                        </span>
                    </div>
                </div>
            </label>
            <div className={"min-w-4 flex"}>
                <button className={"px-[6px] py-[1px] justify-start h-14 flex items-center"}>
                    <Image src={"/icons/delete.svg"} width={20} height={20} alt={"icon"}
                           className={"h-[20px] w-[20px] mr-[0.6rem]"}/>
                </button>
                <button className={"px-[6px] py-[1px] justify-start h-14 flex items-center"}>
                    <Image src={"/icons/changeValue.svg"} width={20} height={20} alt={"icon"}
                           className={"h-[20px] w-[20px] mr-[0.6rem]"}/>
                </button>
            </div>
        </div>
    )
}