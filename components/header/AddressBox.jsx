'use client'
import Link from "next/link";
import Image from "next/image";
import {store} from "@/redux/store";
import {useDispatch} from "react-redux";
import {openAddressModal} from "@/redux/features/headerAddressSlice";
import Address from "@/components/header/Address";

export const AddressBox = () => {
    const address = store.getState().addressModal.address;
    const isOpen = store.getState().addressModal.isOpen;
    console.log(`isOpen: ${isOpen} address:${address}`)
    const dispatch = useDispatch()

    const handleOpenModal = () => {dispatch(openAddressModal())}

    return (
        <div className={"flex items-center"}>
            <Link href={"/"} className={"ml-10 max-[599px]:hidden"}>
                <Image src={"/icons/snappfood.svg"} width={68} height={34} alt={"snappfood"}/>
            </Link>
            <div onClick={handleOpenModal} className={"cursor-pointer h-10 p-1 inline-flex items-center"}>
                <Image src={"/icons/location.svg"} width={12} height={14} alt={"location"} className={"ml-2.5"}/>
                <div className={"ml-2.5"}>
                     <div className={"flex justify-center"}>
                        <span className={"header-address-span overflow-hidden text-carbon-main leading-3 text-[0.625rem] font-iranSans text-ellipsis opacity-60 whitespace-nowrap pt-0.5 max-w-[29vw] min-w-[29vw]"}>
                            {address}
                        </span>
                        <Image src={"/icons/arrow-down-pink.svg"} width={12} height={9} alt={"icon"} className={"w-[12px] mr-[0.6rem]"}/>
                    </div>
                </div>
            </div>
            <Address/>
        </div>
    )
}